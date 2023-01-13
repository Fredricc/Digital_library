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
            return _context.Libraries.ToList();
        }

        public List<Library> GetByName(string prName)
        {
            var linq = from libraries in _context.Libraries select libraries;

            if(!string.IsNullOrWhiteSpace(prName) )
                linq = linq.Where(x => x.Name.ToUpper().Contains(prName.ToUpper()));

            return linq.ToList();
        }

        public Library Save(Library prLibrary)
        {
            _context.Libraries.Add(prLibrary);
            _context.SaveChanges();

            return prLibrary;
        }

        public Library Update(Library prLibrary)
        {
            Library ILibraryFromDB = _context.Libraries.First(x => x.Id == prLibrary.Id);
            _context.Entry(ILibraryFromDB).CurrentValues.SetValues(prLibrary);
            _context.SaveChanges();

            return prLibrary;
        }

        public void Delete(Library prLibrary)
        {

        }
    }
}
