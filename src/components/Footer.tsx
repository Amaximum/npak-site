import Link from "next/link";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/deck-builder", label: "Deck Builder" },
  { href: "/locations", label: "Locations" },
  { href: "/about-us", label: "About" },
];

const contactLinks = [
  { href: "tel:+12898124560", label: "(289) 812-4560" },
  { href: "mailto:npakmax@gmail.com", label: "npakmax@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:px-10 lg:px-0">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">NPAK Construction</p>
          <p className="mt-4 text-sm text-slate-300">
            Crafting custom decks, rooftop lounges, and exterior upgrades across the Greater Toronto Area.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Connect</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {contactLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NPAK Construction. All rights reserved.
      </div>
    </footer>
  );
}
