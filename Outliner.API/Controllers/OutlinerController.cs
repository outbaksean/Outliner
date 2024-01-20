using Microsoft.AspNetCore.Mvc;
using ModelPOC;
using OutlinerService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OutlinerAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OutlinerController(IOutlineService outlineService) : ControllerBase
    {
        private readonly IOutlineService _outlineService = outlineService;

        // GET: api/<OutlinerController>
        [HttpGet]
        public IEnumerable<Outline> Get()
        {
            return _outlineService.GetAllNarratives();
        }

        // POST api/<OutlinerController>
        [HttpPost]
        public void Post([FromBody] Outline value)
        {
            _outlineService.AddOrUpdateNarrative(value);
        }
    }
}
