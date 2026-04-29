using System;

namespace SketchMind.Server.Models
{
    public class Drawing
    {
        // מזהה ייחודי לכל ציור (נוצר אוטומטית)
        public int Id { get; set; }

        // שם הציור (למשל: "חתול על הירח")
        public string Name { get; set; } = string.Empty;

        // כאן נשמור את כל קוד ה-HTML וה-CSS שה-LLM יחזיר לנו
        public string HtmlContent { get; set; } = string.Empty;

        public string UserId { get; set; } = string.Empty;
        // זמן היצירה - יעזור לנו לסדר את ההיסטוריה מהחדש לישן
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}