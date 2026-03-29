import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { locationProfiles } from "@/data/locations";
import ContactForm from "@/components/ContactForm";

const differentiators = [
  "AI-assisted takeoffs reduce waste and speed up permitting",
  "Dedicated project managers provide weekly updates",
  "Composite, hardwood, and hybrid structures built for GTA winters",
  "Forms and phone lines route straight to npakmax@gmail.com for rapid replies",
];

const deckBuilderSeoKeywords = [
  "deck builder GTA",
  "deck builder Toronto",
  "deck builder North York",
  "deck builder Mississauga",
  "deck builder Brampton",
  "deck builder Vaughan",
  "deck builder Richmond Hill",
  "deck builder Aurora",
  "deck builder Markham",
  "deck builder Etobicoke",
  "multi-city deck contractor",
  "luxury deck builder GTA",
  "custom deck installer Toronto",
  "deck builder near me GTA",
  "Ontario deck contractor",
];

export const metadata: Metadata = {
  title: "Deck Builder | NPAK Construction",
  description:
    "NPAK Construction designs and builds custom decks, pergolas, and rooftop terraces across Toronto, North York, Mississauga, Vaughan, Brampton, and the GTA.",
};

export default function DeckBuilderLanding() {
  return (
    <div className="flex flex-1 justify-center">
      <main className="w-full max-w-6xl px-6 py-16 md:px-10 lg:px-0 space-y-16">
        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/60 p-10">
          <SectionHeading
            eyebrow="Deck builder"
            title="Multi-city decking crews ready for your backyard or rooftop"
            description="This page replaces the original WordPress deck builder hub and serves as the launchpad for every city-specific experience."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-surface/70 p-5 text-slate-100">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading eyebrow="Cities" title="Choose your local deck builder" />
          <div className="grid gap-6 md:grid-cols-2">
            {locationProfiles.map((location) => (
              <article key={location.slug} className="rounded-3xl border border-white/10 bg-card/70 p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{location.city}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Deck builder</span>
                </div>
                <p className="mt-4 text-slate-300">{location.summary}</p>
                <Link href={`/deck-builder/${location.slug}`} className="mt-6 inline-flex items-center gap-2 text-accent">
                  Visit page <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/70 p-10">
          <SectionHeading
            eyebrow="SEO keywords"
            title="Top deck builder searches"
            description="We pulled 15 deck builder keywords so this hub ranks alongside every city page."
          />
          <div className="flex flex-wrap gap-3 text-sm text-slate-100">
            {deckBuilderSeoKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/15 px-4 py-2">
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-card/60 p-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Ready to start"
              title="Request a discovery call"
              description="Submit project details and our team replies within 24 hours with next steps."
            />
            <p className="text-slate-300">
              Prefer speaking right away? Call (289) 812-4560 and mention which city page you found us from.
            </p>
          </div>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
