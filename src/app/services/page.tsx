import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const offerings = [
  {
    title: "Custom decking",
    description:
      "Premium hardwood, cedar, and low-maintenance composite decks tailored to Toronto lots, complete with drainage, lighting, and privacy millwork.",
    features: ["Permit-ready drawings", "3D walkthroughs", "Hidden fastener systems"],
  },
  {
    title: "Roofing systems",
    description:
      "Architectural shingles, flat roofing, leak remediation, and proactive maintenance tuned for GTA winters and condo bylaws.",
    features: ["Infrared leak testing", "Snow-load monitoring", "Extended workmanship warranties"],
  },
  {
    title: "Outdoor structures",
    description:
      "Pergolas, pavilions, covered lounges, and cabanas that integrate with existing landscaping, pools, and kitchens.",
    features: ["Integrated lighting + audio", "Aluminum + timber hybrids", "Custom motorized louvers"],
  },
  {
    title: "Project leadership",
    description:
      "Dedicated site leads, weekly reporting, and a single point of contact coordinating trades, inspectors, and suppliers.",
    features: ["Transparent budget tracking", "Vendor coordination", "White-glove turnover"],
  },
];

const workflow = [
  {
    stage: "01",
    title: "Consult",
    summary: "We collect site photos, measurements, and wish lists to define the right mix of decking, roofing, and outdoor living upgrades.",
  },
  {
    stage: "02",
    title: "Design + estimate",
    summary: "Our team prepares renderings, technical drawings, and a phased estimate so you can approve scopes with confidence.",
  },
  {
    stage: "03",
    title: "Build + care",
    summary: "Licensed crews execute, document every inspection, and hand over a spotless site ready for the first gathering.",
  },
];

const serviceSeoKeywords = [
  "deck builder services",
  "deck contractor packages",
  "custom deck installation GTA",
  "deck repair and rebuild Toronto",
  "composite decking expert",
  "cedar deck craftsmanship",
  "deck lighting installation",
  "deck railing contractor",
  "rooftop deck services Toronto",
  "backyard deck renovation GTA",
  "pergola construction Toronto",
  "deck project management services",
  "deck permit assistance",
  "deck design consultation",
  "deck waterproofing Toronto",
];

export const metadata: Metadata = {
  title: "Services | NPAK Construction",
  description:
    "Decking, roofing, and outdoor structure services delivered by NPAK across Toronto, Mississauga, Vaughan, Brampton, and the GTA.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-1 justify-center">
      <main className="w-full max-w-6xl px-6 py-16 md:px-10 lg:px-0 space-y-16">
        <section className="space-y-8 rounded-3xl border border-white/10 bg-card/60 p-10">
          <SectionHeading
            eyebrow="Services"
            title="All the craftsmanship from the legacy WordPress site, now rebuilt on Vercel"
            description="NPAK delivers high-touch decking, roofing, and outdoor architecture backed by meticulous planning, AI-assisted takeoffs, and concierge-level communication."
          />
          <div className="flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="rounded-full border border-white/15 px-4 py-2">Deck design</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Roof replacement</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Outdoor kitchens</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Permits + engineering</span>
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading eyebrow="What we build" title="Decks, roofs, and outdoor structures" />
          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((offering) => (
              <article key={offering.title} className="rounded-3xl border border-white/10 bg-card/70 p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{offering.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">NPAK</span>
                </div>
                <p className="mt-4 text-slate-300">{offering.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-200">
                  {offering.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-card/60 p-10 md:grid-cols-3">
          {workflow.map((step) => (
            <article key={step.title} className="rounded-3xl border border-white/10 bg-surface p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Step {step.stage}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.summary}</p>
            </article>
          ))}
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-card/60 p-10">
          <SectionHeading
            eyebrow="SEO keywords"
            title="Deck builder services homeowners Google"
            description="These 15 service-related keywords support the SEO of every section on this page."
          />
          <div className="flex flex-wrap gap-3 text-sm text-slate-100">
            {serviceSeoKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/15 px-4 py-2">
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-card/70 p-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Request a quote"
              title="Tell us about your project"
              description="Forms now deliver directly to npakmax@gmail.com. Expect a reply within one business day."
            />
            <Link href="/contact-us" className="text-accent">Prefer a call? Visit the contact page →</Link>
          </div>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}
