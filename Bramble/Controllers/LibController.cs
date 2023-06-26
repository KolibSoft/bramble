using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace KolibSoft.Bramble.Controllers;

[Route("[controller]")]
public class LibController : ControllerBase
{

    public IWebHostEnvironment Environment { get; }

    [EnableCors("Allow-All")]
    [HttpGet("js/{**pathParts}")]
    public IActionResult GetJs(string[] pathParts)
    {
        var path = Path.Combine(Environment.ContentRootPath, "wwwroot", "lib", "js", string.Join(Path.DirectorySeparatorChar, pathParts));
        if (System.IO.File.Exists(path))
        {
            var bytes = System.IO.File.ReadAllBytes(path);
            return File(bytes, "text/javascript");
        }
        return NotFound();
    }

    [EnableCors("Allow-All")]
    [HttpGet("css/{*pathParts}")]
    public IActionResult GetCss(string[] pathParts)
    {
        var path = Path.Combine(Environment.ContentRootPath, "wwwroot", "lib", "css", string.Join(Path.DirectorySeparatorChar, pathParts));
        if (System.IO.File.Exists(path))
        {
            var bytes = System.IO.File.ReadAllBytes(path);
            return File(bytes, "text/css");
        }
        return NotFound();
    }

    public LibController(IWebHostEnvironment environment)
    {
        Environment = environment;
    }

}