using Digital_library.Model.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Digital_library.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class LibraryController : ControllerBase
{
    private readonly ILibraryService _ILibraryService;

    public LibraryController(ILibraryService prILibraryService)
    {
        _ILibraryService = prILibraryService;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        List<Library> IResult = _ILibraryService.GetAll();
        return Ok(IResult);
    }

    [HttpGet]
    public IActionResult GetByName(string prName)
    {
        List<Library> IResult = _ILibraryService.GetByName(prName);
        return Ok(IResult);
    }
    [HttpPut]
    public IActionResult Update(Library prLibrary)
    {
        return Ok(_ILibraryService.Update(prLibrary));
    }
    [HttpPost]
    public IActionResult Save(Library prLibrary)
    {
        return Ok(_ILibraryService.Save(prLibrary));
    }
    [HttpDelete]
    public IActionResult Delete(Library prLibrary) 
    {
        _ILibraryService.Delete(prLibrary);
        return Ok();
    }
}

