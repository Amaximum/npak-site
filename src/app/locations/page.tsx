import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { locationProfiles } from "@/data/locations";
import ContactForm from "@/components/ContactForm";

const locationsSeoKeywords = [
  "deck builder Toronto neighbourhoods",
  "deck contractor North York",
  "deck builder Mississauga",
  "deck builder Vaughan",
  "deck builder Brampton",
  "deck builder Richmond Hill",
  "deck builder Aurora",
  "deck builder Markham",
  "deck builder Etobicoke",
  "GTA deck crews",
  "local deck contractor GTA",
  "deck builder near me GTA",
  "Ontario deck builder locations",
  "multi-city deck builder",
  "satellite deck crews Toronto",
];

export const metadata: Metadata = {
  title: "Locations | NPAK Construction",
  description: "Explore all NPAK Construction service areas including Toronto, North York, Mississauga, Vaughan, Brampton, and more.",
};

export default function LocationsPage() {
  return (
    <div className="flex flex-1 justify-center">
      <main className="w-full max-w-6xl px-6 py-16 md:px-10 lg:px-0 space-y-16">
        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/60 p-10">
          <SectionHeading
            eyebrow="Locations"
            title="Local crews across the Greater Toronto Area"
            description="Each legacy deck builder page has been rebuilt with richer content, faster loading, and forms that work."
          />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {locationProfiles.map((location) => (
            <article key={location.slug} className="rounded-3xl border border-white/10 bg-card/70 p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">{location.city}</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Deck builder</span>
              </div>
              <p className="mt-4 text-slate-300">{location.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm text-slate-200">
                {location.neighborhoods.map((neighborhood) => (
                  <li key={neighborhood} className="rounded-full border border-white/15 px-3 py-1">
                    {neighborhood}
                  </li>
                ))}
              </ul>
              <Link href={`/deck-builder/${location.slug}`} className="mt-6 inline-flex items-center gap-2 text-accent">
                Open city page <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/60 p-10">
          <SectionHeading
            eyebrow="SEO keywords"
            title="Как ищут региональные команды"
            description="Каждая фраза—распространённый запрос по теме deck builder в GTA, помогающий выдаче."
          />
          <div className="flex flex-wrap gap-3 text-sm text-slate-100">
            {locationsSeoKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/15 px-4 py-2">
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-card/70 p-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Ready to start"
              title="One form covers every city"
              description="Send project details and note which city you are in. The submission lands directly in our inbox at npakmax@gmail.com."
            />
            <p className="text-slate-300">Prefer to call your local crew? Dial (289) 812-4560.</p>
          </div>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
