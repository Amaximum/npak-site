import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { locationProfiles, locationMap } from "@/data/locations";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return locationProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = locationMap[slug];
  if (!profile) {
    return {
      title: "Deck Builder | NPAK Construction",
    };
  }

  return {
    title: `${profile.hero} | NPAK Construction`,
    description: profile.summary,
  };
}

export default async function DeckBuilderCityPage({ params }: PageProps) {
  const { slug } = await params;
  const profile = locationMap[slug];
  if (!profile) {
    notFound();
  }

  const nearby = locationProfiles.filter((entry) => entry.slug !== profile.slug).slice(0, 3);
  const citySeoKeywords = [
    `${profile.city} deck builder`,
    `${profile.city} deck contractor`,
    `${profile.city} custom decks`,
    `${profile.city} composite decking`,
    `${profile.city} cedar deck builder`,
    `${profile.city} rooftop deck builder`,
    `${profile.city} pergola contractor`,
    `${profile.city} deck renovation`,
    `${profile.city} outdoor living company`,
    `${profile.city} deck design`,
    `${profile.city} deck repair`,
    `${profile.city} deck installation`,
    `${profile.city} deck permit help`,
    `${profile.city} deck quote`,
    `${profile.city} deck builder near me`,
  ];

  return (
    <div className="flex flex-1 justify-center">
      <main className="w-full max-w-6xl px-6 py-16 md:px-10 lg:px-0 space-y-16">
        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/60 p-10">
          <SectionHeading
            eyebrow="Deck builder"
            title={profile.hero}
            description={profile.description}
          />
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            {profile.highlights.map((highlight) => (
              <span key={highlight} className="rounded-full border border-white/15 px-4 py-2">
                {highlight}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-card/70 p-10 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Neighbourhoods"
              title="Where we build"
              description="We operate local crews and supplier relationships in these neighbourhoods and beyond."
            />
          </div>
          <div className="flex flex-wrap gap-3 text-slate-100">
            {profile.neighborhoods.map((neighborhood) => (
              <span key={neighborhood} className="rounded-full border border-white/15 px-4 py-2">
                {neighborhood}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/60 p-10">
          <SectionHeading
            eyebrow="SEO keywords"
            title={`How homeowners search for deck builders in ${profile.city}`}
            description="15 localized queries reinforce each city's SEO footprint."
          />
          <div className="flex flex-wrap gap-3 text-sm text-slate-100">
            {citySeoKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/15 px-4 py-2">
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-card/60 p-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Contact"
              title="Ready to plan your project?"
              description="Submit details and reference this city page—our inbox at npakmax@gmail.com routes requests within 24 hours."
            />
            <p className="text-slate-300">
              {`Prefer a call? Dial (289) 812-4560 and mention you are in ${profile.city}.`}
            </p>
          </div>
          <ContactForm />
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/70 p-10">
          <SectionHeading
            eyebrow="Nearby crews"
            title="Explore more NPAK locations"
            description="These neighbouring pages were also rebuilt from the legacy site."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {nearby.map((location) => (
              <article key={location.slug} className="rounded-3xl border border-white/10 bg-surface p-6">
                <h3 className="text-xl font-semibold text-white">{location.city}</h3>
                <p className="mt-3 text-slate-300">{location.summary}</p>
                <Link href={`/deck-builder/${location.slug}`} className="mt-4 inline-flex items-center gap-2 text-accent">
                  View page <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
