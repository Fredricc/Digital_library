using Digital_library.Model.Entities;
using Microsoft.EntityFrameworkCore;

namespace Digital_library
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) 
            : base(options)
        {
        
        }
        public DbSet<Library> Libraries { get; set; }
    }
}
