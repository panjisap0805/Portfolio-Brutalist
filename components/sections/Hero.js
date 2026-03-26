export default function Hero() {
  return (
    <section className="relative z-10 border-b-2 border-black grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
      <div className="lg:col-span-8 p-6 lg:p-12 flex flex-col justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-black">
        <div className="inline-block px-3 py-1 border-2 border-black rounded-full text-xs font-mono font-bold mb-6 w-max bg-white brutalist-shadow">
          Available for new projects ●
        </div>
        <h1 className="text-6xl lg:text-9xl font-bold leading-[0.85] tracking-tighter uppercase mb-4">
          Panji<br /><span className="text-stroke">Saputro</span>
        </h1>
        <h2 className="text-xl lg:text-2xl font-mono border-l-4 border-primary pl-4 mb-8 max-w-xl">
          PRODUCT DESIGNER &amp; TECHNICAL BRIDGE
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl mb-10 leading-relaxed font-medium">
          With <span className="bg-primary/20 px-1 font-bold">4+ years of experience</span> crafting digital products. I don&apos;t just design interfaces; I engineer interactions and bridge the critical gap between creative vision and deployment-ready code.
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="group bg-black text-white px-8 py-4 text-lg font-bold border-2 border-black hover:bg-primary hover:border-primary transition-all duration-200 flex items-center gap-2 brutalist-shadow-primary active:translate-y-1 active:shadow-none" href="#work">
            [EXPLORE_PROJECTS]
            <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
          <a className="bg-white text-black px-8 py-4 text-lg font-bold border-2 border-black hover:bg-gray-50 transition-all duration-200 flex items-center gap-2 active:translate-y-[2px]" href="#resume">
            DOWNLOAD_CV
            <span className="material-icons text-sm">download</span>
          </a>
        </div>
      </div>
      <div className="lg:col-span-4 bg-primary relative overflow-hidden flex flex-col justify-between">
        <div className="absolute inset-0 bg-primary opacity-90 mix-blend-multiply"></div>
        <img alt="Portrait of Panji Saputro" className="absolute inset-0 w-full h-full object-cover object-top mix-blend-luminosity opacity-40 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfaur84DKjKfz_1qK-rEhcpnjZyFU3RwLZn8fmKtVGHNdpCo-ORanmcuVrm8_xiJ3FXf9f5yuZmLTDp6yEZyNrCgKeJx8dyE4fMACFPlHz1EOho9S5goUxLerrtcE24gIf4yC1UW_MyytdFXLFXt51XVfNSuUnxLQ5n4vgiXgA59G71hzAoYTuxzzw6hBafFjhz-RKkpB8mvqjsU4o3d4JPxdJZQb9SewWvS1fIDlsEEfndhUo3Ze7cW9bVazTzy7Ir1IfYIYoX4jM" />
        <div className="relative z-10 p-8">
          <div className="text-white font-mono text-sm opacity-80 uppercase tracking-widest">Current_Location:</div>
          <div className="text-white text-3xl font-bold uppercase">Jakarta, ID</div>
        </div>
        <div className="relative z-10 p-8">
          <div className="w-20 h-20 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 brutalist-shadow">
            <span className="material-icons text-4xl text-primary">architecture</span>
          </div>
          <div className="text-white font-mono text-sm leading-relaxed bg-black/20 p-4 border-l-2 border-white backdrop-blur-sm">
            &lt;System&gt;<br />
            Optimizing for efficiency.<br />
            Reducing technical debt.<br />
            Scaling design systems.<br />
            &lt;/System&gt;
          </div>
        </div>
      </div>
    </section>
  );
}
