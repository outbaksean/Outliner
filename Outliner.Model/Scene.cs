namespace ModelPOC
{
    public class Scene
    {
        public required string Name { get; set; }
        public string? Description { get; set; }
        public List<Character>? Characters { get; set; }
        public List<Setting>? Settings { get; set; }
        public string? Content { get; set; }
    }
}