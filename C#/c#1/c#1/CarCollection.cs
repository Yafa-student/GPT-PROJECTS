using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace c_1
{
    internal class CarCollection<T> where T : Car
    {
        public Car[] CarsForSale { get; set; }
    }
}
