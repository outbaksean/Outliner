using ModelPOC;

namespace OutlinerService
{
    public interface IOutlineService
    {
        void AddOrUpdateNarrative(Outline narrative);
        List<Outline> GetAllNarratives();
    }
}