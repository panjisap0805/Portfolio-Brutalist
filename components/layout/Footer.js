export default function Footer() {
  return (
    <footer className="bg-black text-white p-8 lg:p-16 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 text-[20rem] font-bold text-white opacity-5 pointer-events-none leading-none -mt-16 -mr-16">
        HI
      </div>
      <div className="relative z-10">
        <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tight leading-none mb-12">
          Let&apos;s Build Something<br /><span className="text-primary">Efficient.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t-2 border-white/20 pt-12">
          <div>
            <p className="font-mono text-gray-400 mb-4">CONTACT_INFO</p>
            <a className="text-2xl lg:text-3xl font-bold hover:text-primary transition-colors block mb-2" href="mailto:hallo@panjisaputro.id">hallo@panjisaputro.id</a>
            <p className="text-lg text-gray-400">+62 812 3456 7890</p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-mono text-gray-400 mb-4">SOCIAL_LINKS</p>
              <div className="flex gap-6">
                <a className="text-xl font-bold hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary" href="https://www.linkedin.com/in/panjisap0805/">LinkedIn</a>
                <a className="text-xl font-bold hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary" href="https://dribbble.com/panjisaputro">Dribbble</a>
                <a className="text-xl font-bold hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary" href="https://github.com/panjisap0805">Github</a>
                <a className="text-xl font-bold hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary" href="https://medium.com/@panjisaputro">Medium</a>
              </div>
            </div>
            <div className="mt-12 md:mt-0 text-right">
              <p className="font-mono text-xs text-gray-500">© 2025 PANJI SAPUTRO. BRUTALIST PORTFOLIO V1.0</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
