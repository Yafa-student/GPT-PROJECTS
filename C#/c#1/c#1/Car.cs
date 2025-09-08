using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace c_1
{
    internal class Car
    {
        public String Company { get; set; }
        public int SetsNum { get; set; }
        public int Price { get; set; }
        public Car(string company, int setsNum, int price)
        {
            Company = company;
            SetsNum = setsNum;
            Price = price;
        }

        public String toString()
        {
            return $"comany:{Company},sets num:, {SetsNum}, Age: {Price}";
        }

    }
}
