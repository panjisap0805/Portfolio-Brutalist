import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-light border-b-2 border-black">
      <div className="max-w-[1440px] mx-auto flex justify-between items-stretch relative bg-background-light z-50">
        <div className="flex items-center px-6 py-5 border-r-2 border-black bg-black text-white hover:bg-primary transition-colors duration-300">
          <Link className="text-xl font-bold tracking-tighter uppercase" href="/">PANJI SAPUTRO</Link>
        </div>

        <div className="hidden md:flex items-stretch font-mono text-sm">
          <Link className="flex items-center px-6 border-l-2 border-black hover:bg-black hover:text-white transition-all duration-200" href="/#work">[CASE STUDIES]</Link>
          <Link className="flex items-center px-6 border-l-2 border-black hover:bg-black hover:text-white transition-all duration-200" href="/#process">[PROCESS]</Link>
          <Link className="flex items-center px-6 border-l-2 border-black hover:bg-black hover:text-white transition-all duration-200" href="/#about">[ABOUT]</Link>
          <Link className="flex items-center px-6 border-l-2 border-black border-r-2 bg-primary/10 hover:bg-primary hover:text-white transition-all duration-200 font-bold text-primary" href="/#contact">[CONTACT]</Link>
        </div>

        <button 
          className={`md:hidden flex items-center px-6 border-l-2 border-black hover:bg-black hover:text-white transition-colors ${isOpen ? 'bg-black text-white' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light border-b-2 border-black flex flex-col font-mono text-lg z-40 shadow-[0_10px_0_0_rgba(0,0,0,1)]">
          <Link href="/#work" onClick={() => setIsOpen(false)} className="px-6 py-5 border-b-2 border-black hover:bg-black hover:text-white transition-colors font-bold flex justify-between items-center">
            [CASE STUDIES] <span className="material-icons">arrow_forward</span>
          </Link>
          <Link href="/#process" onClick={() => setIsOpen(false)} className="px-6 py-5 border-b-2 border-black hover:bg-black hover:text-white transition-colors font-bold flex justify-between items-center">
            [PROCESS] <span className="material-icons">arrow_forward</span>
          </Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="px-6 py-5 border-b-2 border-black hover:bg-black hover:text-white transition-colors font-bold flex justify-between items-center">
            [ABOUT] <span className="material-icons">arrow_forward</span>
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} className="px-6 py-5 bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors font-bold flex justify-between items-center">
            [CONTACT] <span className="material-icons text-xl">email</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
