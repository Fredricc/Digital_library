namespace Digital_library.Model.Entities
{
    public class LibraryService : ILibraryService
    {
        public AppDataContext _context { get; set; }

        public LibraryService(AppDataContext prAppDataContext)
        {
            _context = prAppDataContext;
        }

        public List<Library> GetAll()
        {
            return null;
        }

        public List<Library> GetByName(string prName)
        {
            return null;
        }

        public Library Save(Library prLibrary)
        {
            return null;
        }

        public Library Update(Library prLibrary)
        {
            return null;
        }

        public void Delete(Library prLibrary)
        {

        }
    }
}
