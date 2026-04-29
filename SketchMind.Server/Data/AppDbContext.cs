using Microsoft.EntityFrameworkCore;
using SketchMind.Server.Models;

namespace SketchMind.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // כאן אנחנו מגדירים את הטבלה שלנו. נקרא לה Drawings.
        public DbSet<Drawing> Drawings { get; set; }
    }
}