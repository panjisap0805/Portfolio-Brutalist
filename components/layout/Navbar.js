export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light border-b-2 border-black">
      <div className="max-w-[1440px] mx-auto flex justify-between items-stretch">
        <div className="flex items-center px-6 py-5 border-r-2 border-black bg-black text-white hover:bg-primary transition-colors duration-300">
          <a className="text-xl font-bold tracking-tighter uppercase" href="#">PANJI SAPUTRO</a>
        </div>
        <div className="hidden md:flex items-stretch font-mono text-sm">
          <a className="flex items-center px-6 border-l-2 border-black hover:bg-black hover:text-white transition-all duration-200" href="#work">[WORK]</a>
          <a className="flex items-center px-6 border-l-2 border-black hover:bg-black hover:text-white transition-all duration-200" href="#process">[PROCESS]</a>
          <a className="flex items-center px-6 border-l-2 border-black hover:bg-black hover:text-white transition-all duration-200" href="#about">[ABOUT]</a>
          <a className="flex items-center px-6 border-l-2 border-black bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200 font-bold text-primary" href="#contact">[CONTACT]</a>
        </div>
        <button className="md:hidden flex items-center px-6 border-l-2 border-black">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </nav>
  );
}
