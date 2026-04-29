using Microsoft.AspNetCore.Mvc;
using Mscc.GenerativeAI;
using SketchMind.Server.Data;
using SketchMind.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Configuration;


namespace SketchMind.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class DrawingsController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IConfiguration _configuration;
        private static int _geminiCallCount = 0;

        public DrawingsController(AppDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("generate")]
        public async Task<IActionResult> GenerateDrawing([FromBody] Drawing drawingRequest)
        {
            try
            {
                // בדיקה שהבקשה לא ריקה
                if (drawingRequest == null || string.IsNullOrEmpty(drawingRequest.Name))
                    return BadRequest("Name is required");

                var apiKey = _configuration["GoogleAI:ApiKey"];
                var modelName = _configuration["GeminiSettings:ModelName"];
                var googleAI = new GoogleAI(apiKey);
                var model = googleAI.GenerativeModel(modelName);

                _geminiCallCount++;
                Console.WriteLine($"[Gemini] ניסיון #{_geminiCallCount} — בקשה: {drawingRequest.Name}");

                string systemInstruction = @"You are a strict SVG generator. Your goal is to create simple drawings using ONLY the following basic shapes: <circle>, <rect>, <line>, and <ellipse>.
STRICT RULES:
1. ONLY draw what the user explicitly asks for.
2. If the user asks for something that is NOT a request for a drawing (e.g., asking a question, greeting, or general conversation), instead of drawing, return an SVG that only contains a <text> element in the center saying 'I only draw things, I don't talk!'.
3. Use only solid, simple colors. Viewbox is 500x500.
4. If an 'Existing SVG' is provided, keep it and add the new object.
5. Return ONLY the raw <svg> code. No explanations, no markdown backticks.";

                string finalPrompt = $"{systemInstruction}---Existing SVG: {drawingRequest.HtmlContent}User Request: {drawingRequest.Name}---Generated SVG:";

                var response = await model.GenerateContent(finalPrompt);
                string responseText = response.Text ?? "";

                string cleanSvg = responseText
                    .Replace("```html", "")
                    .Replace("```xml", "")
                    .Replace("```svg", "")
                    .Replace("```", "")
                    .Trim();

                return Ok(new { htmlContent = cleanSvg });
            }
            catch (Exception ex)
            {

                return StatusCode(500, ex.ToString());
            }
        }

        [HttpPost("save")]
        public async Task<IActionResult> SaveToDatabase([FromBody] Drawing drawing)
        {
            try
            {
                _context.Drawings.Add(drawing);
                await _context.SaveChangesAsync();
                return Ok(new { message = "נשמר בהצלחה בגלריה!" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"DB Error: {ex.Message}");
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Drawing>>> GetUserDrawings([FromQuery] string? userId)
        {
            if (string.IsNullOrEmpty(userId))
                return await _context.Drawings.OrderByDescending(d => d.CreatedAt).ToListAsync();

            return await _context.Drawings
                .Where(d => d.UserId == userId)
                .OrderByDescending(d => d.CreatedAt)
                .ToListAsync();
        }
        [HttpPost]
        public async Task<ActionResult<Drawing>> PostDrawing(Drawing drawing)
        {
            _context.Drawings.Add(drawing);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUserDrawings), new { id = drawing.Id }, drawing);
        }

        [HttpPost("send-email")]
        public async Task<IActionResult> SendEmail([FromBody] EmailRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.HtmlContent))
            {
                return BadRequest("פרטי הבקשה חסרים.");
            }

            try
            {
                // שליפת הגדרות מה-appsettings.json
                var smtpServer = _configuration["SmtpSettings:Server"];
                var smtpPort = int.Parse(_configuration["SmtpSettings:Port"] ?? "587");
                var senderEmail = _configuration["SmtpSettings:SenderEmail"];
                var senderName = _configuration["SmtpSettings:SenderName"];
                var appPassword = _configuration["SmtpSettings:AppPassword"];

                using var smtpClient = new SmtpClient(smtpServer)
                {
                    Port = smtpPort,
                    Credentials = new NetworkCredential(senderEmail, appPassword),
                    EnableSsl = true,
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(senderEmail, senderName),
                    Subject = "🎨 הציור שלך מ-SketchMind מוכן!",
                    // עיצוב HTML מושקע לגוף המייל
                    Body = $@"
                <div dir='rtl' style='font-family: ""Segoe UI"", Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden;'>
                    <div style='background-color: #2c3e50; padding: 20px; text-align: center; color: white;'>
                        <h1 style='margin: 0;'>SketchMind AI</h1>
                    </div>
                    <div style='padding: 30px; text-align: center; background-color: #f9f9f9;'>
                        <p style='font-size: 18px; color: #333;'>היי! הנה היצירה שיצרת באפליקציה:</p>
                        <div style='background: white; padding: 15px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: inline-block; margin: 20px 0;'>
                            {request.HtmlContent}
                        </div>
                        <p style='color: #666; font-size: 14px;'>תוכל לשמור את הציור על ידי לחיצה ימנית ושמירה כתמונה.</p>
                    </div>
                    <div style='background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #999;'>
                        נשלח על ידי SketchMind v1.0 &copy; {DateTime.Now.Year}
                    </div>
                </div>",
                    IsBodyHtml = true,
                };

                mailMessage.To.Add(request.Email);

                await smtpClient.SendMailAsync(mailMessage);

                return Ok(new { message = "המייל נשלח בהצלחה!" });
            }
            catch (SmtpException smtpEx)
            {
                return BadRequest($"שגיאת שרת דואר: {smtpEx.Message}");
            }
            catch (Exception ex)
            {
                return BadRequest($"שגיאה כללית: {ex.Message}");
            }
        }
    }
}
