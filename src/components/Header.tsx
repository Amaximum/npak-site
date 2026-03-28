import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/deck-builder", label: "Deck Builder" },
  { href: "/locations", label: "Locations" },
  { href: "/about-us", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-surface/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-0">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-[0.3em] uppercase">
          <span className="h-3 w-3 rounded-full bg-accent" aria-hidden />
          NPAK
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact-us"
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/10"
        >
          Book Call
        </Link>
      </div>
    </header>
  );
}
