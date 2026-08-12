import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-grid bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[60px] max-w-[1200px] items-center justify-between px-5 md:px-10">
        <Link
          href="/"
          className="t-display whitespace-nowrap text-[15px] tracking-normal"
          aria-label="Panji Saputro, home"
        >
          Panji Saputro
        </Link>
        <nav aria-label="Site">
          <ul className="flex items-center gap-6 md:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="t-label link-draw text-ink-soft hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
