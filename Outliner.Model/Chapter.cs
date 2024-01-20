namespace ModelPOC
{
    public class Chapter
    {
        public required string Name { get; set; }
        public string? Description { get; set; }
        public List<Scene>? Scenes { get; set; }
        public List<Character>? Characters { get; set; }
        public List<Setting>? Settings { get; set; }
    }
}