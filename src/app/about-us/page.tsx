import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const values = [
  {
    title: "Nurturing",
    detail: "We treat every project like a hosted experience, guiding homeowners through decisions with clear language and visual aids.",
  },
  {
    title: "Passion",
    detail: "Craftsmanship shows up in tight miters, clean flashing, and proactive communication—never rushed punch lists.",
  },
  {
    title: "Adaptability",
    detail: "Whether it is condo board bylaws or rapid design feedback, we adjust quickly without losing schedule discipline.",
  },
  {
    title: "Knowledge",
    detail: "Licensed carpenters, roofers, and project managers contribute decades of combined experience across the GTA.",
  },
];

const milestones = [
  { year: "2015", summary: "NPAK launches as a boutique decking firm serving Toronto east end." },
  { year: "2018", summary: "Roofing division opens with snow-load engineering partners." },
  { year: "2021", summary: "Outdoor structures and cabanas expand service mix across York region." },
  { year: "2024", summary: "Migration from WordPress to Next.js unlocks faster quoting tools and improved SEO." },
];

const aboutSeoKeywords = [
  "about deck builder Toronto",
  "deck construction experts GTA",
  "family-owned deck company",
  "luxury deck specialists Toronto",
  "experienced deck contractor",
  "roof and deck builder story",
  "award-winning deck builder Toronto",
  "custom deck heritage Toronto",
  "trusted deck contractor Ontario",
  "deck craftsmanship Toronto",
  "NPAK deck builder",
  "Toronto outdoor living experts",
  "deck leadership team",
  "deck builder values",
  "premium deck contractor GTA",
];

export const metadata: Metadata = {
  title: "About NPAK Construction",
  description:
    "Learn about NPAK Construction's story, values, and team delivering decks, roofs, and outdoor structures across the Greater Toronto Area.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 justify-center">
      <main className="w-full max-w-6xl px-6 py-16 md:px-10 lg:px-0 space-y-16">
        <section className="grid gap-10 rounded-3xl border border-white/10 bg-card/60 p-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About us"
              title="NPAK stands for Nurturing, Passion, Adaptability, Knowledge"
              description="Co-founders Nikita and Pavel built NPAK to feel different from the typical contracting experience—more hospitality, more documentation, and structures that look as refined as they perform."
            />
            <p className="text-slate-300">
              We started on WordPress, but as our clients grew, we rebuilt the entire experience on Next.js and Vercel to match the pace of our job sites. Every legacy page returns as a faster, richer chapter that mirrors our on-site process.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-surface/60 p-6">
            <Image src="/npak-mark.svg" alt="NPAK mark" width={96} height={96} className="mb-6" />
            <p className="text-lg text-slate-100">“We only deliver builds we would host our own friends on.”</p>
            <p className="mt-4 text-sm text-slate-400">— Nikita & Pavel</p>
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading eyebrow="Values" title="Principles that guide every deck and roof" />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl border border-white/10 bg-card/70 p-8">
                <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-slate-300">{value.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/60 p-10">
          <SectionHeading eyebrow="Milestones" title="From boutique decks to full outdoor architecture" />
          <div className="grid gap-4">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="rounded-2xl border border-white/10 bg-surface p-6 flex flex-col gap-2">
                <span className="text-sm uppercase tracking-[0.2em] text-slate-400">{milestone.year}</span>
                <p className="text-slate-100">{milestone.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/60 p-10">
          <SectionHeading
            eyebrow="SEO keywords"
            title="Why homeowners search for NPAK"
            description="15 ключевых фраз из тематики deck builder отражают наш опыт и усиливают видимость страницы."
          />
          <div className="flex flex-wrap gap-3 text-sm text-slate-100">
            {aboutSeoKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/15 px-4 py-2">
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-card/70 p-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Stay in touch"
              title="Ready to plan your next build?"
              description="Fill out the form and our founders receive it directly at npakmax@gmail.com for a same-day response."
            />
            <p className="text-slate-300">Prefer a call? Reach us at (289) 812-4560.</p>
          </div>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
