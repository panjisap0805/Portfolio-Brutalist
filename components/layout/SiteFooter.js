const year = new Date().getFullYear();

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink">
      <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-10 md:py-20">
        <p className="t-statement max-w-[16ch] text-[clamp(2rem,6vw,4.25rem)]">
          Built to be used, not just admired.
        </p>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-grid pt-6">
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            <li>
              <a href="mailto:hallo@panjisaputro.id" className="t-label link-draw">
                hallo@panjisaputro.id
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/panjisap0805/"
                target="_blank"
                rel="noopener noreferrer"
                className="t-label link-draw"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@panjisaputro"
                target="_blank"
                rel="noopener noreferrer"
                className="t-label link-draw"
              >
                Medium
              </a>
            </li>
          </ul>
          <p className="t-label text-ink-soft">
            Designed and deployed by me. {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
