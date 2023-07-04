using System.ComponentModel.DataAnnotations;

namespace malino.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string ReferralCode { get; set; }
        public DateTime CreateAt { get; set; }
    }
}
