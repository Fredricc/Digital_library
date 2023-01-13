using Digital_library.DependencyInjection;
using Digital_library.Model.DTO;
using Digital_library.Model.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Digital_library.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private IConsolewriter _IConsoleWriter;
        private ILibraryService _ILibraryService;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IConsolewriter prIConsoleWriter, ILibraryService prILibraryService)
        {
            _logger = logger;
            _IConsoleWriter = prIConsoleWriter;
            _ILibraryService = prILibraryService;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            //Depndency Injection
            //_IConsoleWriter.Write();

            /* GET Libraries */
           // List<Library> ILibraries = _ILibraryService.GetAll();
           // List<Library> ILibraries = _ILibraryService.GetByName("LIBRARY OF OXFORD");

            /* ADD LIBRARY */
            Library lNewLibrary = new Library() { Name = "Test Library", Address= "Test Address", Telephone = "1234567890"};
            _ILibraryService.Save(lNewLibrary);

            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}