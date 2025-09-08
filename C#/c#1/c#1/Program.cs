// See https://aka.ms/new-console-template for more information
using c_1;
using System.Drawing;


List<Car> Cars_Catalog = new()
{
    new ("Toyota", 5, 20000),
    new ("Honda", 4, 18000),
    new ("Ford", 2, 22000)
};
var CipsCars = Cars_Catalog.Where(car => car.Price > 20000);
foreach (var car in CipsCars)
    Console.WriteLine(car.toString());
Console.ForegroundColor = ConsoleColor.Green;
var Toyotas = Cars_Catalog.Where(car => car.Company.Equals("Toyota"));
foreach (var car in Toyotas)
    Console.WriteLine(car.toString());
Console.ForegroundColor = ConsoleColor.Yellow;
var ExpensiverCar = (from car in Cars_Catalog
                     orderby car.Price descending
                     select car).FirstOrDefault();
if (ExpensiverCar != null)
{
    Console.WriteLine($"Most Expensive Car: {ExpensiverCar.ToString()}");
}
else Console.WriteLine("No cars in the catalog.");
Console.ForegroundColor = ConsoleColor.Cyan;
var Hondas = Cars_Catalog.Where(car => car.Company.Equals("Honda"));
Console.WriteLine($"There are {Hondas.Count()} cars of Honda in the catalog.");

