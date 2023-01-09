using System.Diagnostics;


namespace Digital_library.DependencyInjection
{
    public class ConsoleWriter : IConsolewriter
    {
        public void Write()
        {
            Debug.WriteLine("Testing Dependency Injection...");
        }
    }
}
