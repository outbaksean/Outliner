namespace ModelPOC
{
    public class Outline
    {
        public required string Name { get; set; }
        public string? Description { get; set; }
        public List<Setting>? Settings { get; set; }
        public List<Character>? Characters { get; set; }
        public List<Chapter>? Chapters { get; set; }
    }
}
