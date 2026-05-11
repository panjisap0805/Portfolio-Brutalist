export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-6 lg:px-16 lg:py-8 border-t-2 border-black" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1440px] mx-auto">
        <p className="font-bold text-[10px] md:text-xs uppercase tracking-wider text-center md:text-left">
          © 2026 PANJI SAPUTRO. ALL SYSTEMS OPERATIONAL.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
          <a className="font-bold text-[10px] md:text-xs uppercase tracking-wider hover:text-primary transition-colors" href="https://www.linkedin.com/in/panjisap0805/">LINKEDIN</a>
          <a className="font-bold text-[10px] md:text-xs uppercase tracking-wider hover:text-primary transition-colors" href="https://dribbble.com/panjisaputro">DRIBBBLE</a>
          <a className="font-bold text-[10px] md:text-xs uppercase tracking-wider hover:text-primary transition-colors" href="https://github.com/panjisap0805">GITHUB</a>
          <a className="font-bold text-[10px] md:text-xs uppercase tracking-wider hover:text-primary transition-colors" href="https://medium.com/@panjisaputro">MEDIUM</a>
        </div>
      </div>
    </footer>
  );
}
