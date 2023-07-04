using malino.Models;
using Microsoft.EntityFrameworkCore;

namespace malino.Data
{
    public class MyAppDbContext : DbContext
    {
        public MyAppDbContext(DbContextOptions options) : base(options) { 
        
        }
        public DbSet<Customer> Customers { get; set; }
    }
}
