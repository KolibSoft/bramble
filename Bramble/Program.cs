var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("Allow-All", config =>
    {
        config.AllowAnyOrigin();
    });
});

var app = builder.Build();
app.UseCors();
app.MapControllers();

app.MapGet("/", () => "Kolib Software - Bramble");

app.Run();
