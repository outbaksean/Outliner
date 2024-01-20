using ModelPOC;

namespace OutlinerService
{
    public class OutlineService : IOutlineService
    {
        private readonly List<Outline> Narratives;

        public OutlineService()
        {
            Narratives = [];
        }

        public List<Outline> GetAllNarratives()
        {
            return Narratives;
        }

        public void AddOrUpdateNarrative(Outline narrative)
        {
            var existingNarrative = Narratives.Find(n => n.Name == narrative.Name);
            if (existingNarrative != null)
            {
                existingNarrative = narrative;
            }
            else
            {
                Narratives.Add(narrative);
            }
        }
    }
}
