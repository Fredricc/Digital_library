using Microsoft.EntityFrameworkCore;

namespace Digital_library
{
    public class AppDataContext : DbContext
    {
        public AppDataContext(DbContextOptions<AppDataContext> options) 
            : base(options)
        {
        
        }
    }
}
