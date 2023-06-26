using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace KolibSoft.Bramble.Controllers;

[Route("[controller]")]
public class LibController : ControllerBase
{

    public IWebHostEnvironment Environment { get; }

    [EnableCors("Allow-All")]
    [HttpGet("{**pathParts}")]
    public IActionResult Get(string[] pathParts)
    {
        var path = Path.Combine(Environment.ContentRootPath, "wwwroot", "lib", string.Join(Path.DirectorySeparatorChar, pathParts));
        if (System.IO.File.Exists(path))
        {
            var bytes = System.IO.File.ReadAllBytes(path);
            switch (Path.GetExtension(path))
            {
                case ".html": return File(bytes, "text/html");
                case ".css": return File(bytes, "text/css");
                case ".js": return File(bytes, "text/javascript");
                case ".ttf": return File(bytes, "font/ttf");
            }
        }
        return NotFound();
    }

    public LibController(IWebHostEnvironment environment)
    {
        Environment = environment;
    }

}