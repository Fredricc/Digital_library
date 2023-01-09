using Digital_library.DependencyInjection;
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

        public WeatherForecastController(ILogger<WeatherForecastController> logger, IConsolewriter prIConsoleWriter)
        {
            _logger = logger;
            _IConsoleWriter = prIConsoleWriter;     
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            //Depndency Injection
            _IConsoleWriter.Write();

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