import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const contactOptions = [
  { label: "Phone", value: "(289) 812-4560", href: "tel:+12898124560" },
  { label: "Email", value: "npakmax@gmail.com", href: "mailto:npakmax@gmail.com" },
  { label: "Service area", value: "Greater Toronto Area + select cottage builds" },
];

const contactSeoKeywords = [
  "contact deck builder",
  "deck builder phone Toronto",
  "deck contractor email GTA",
  "book deck consultation",
  "deck quote Toronto",
  "deck builder hotline",
  "deck estimate request",
  "deck builder support",
  "deck contractor contact form",
  "talk to deck builder",
  "deck builder appointment",
  "deck project hotline",
  "schedule deck consultation",
  "deck builder customer service",
  "deck builder call now",
];

export const metadata: Metadata = {
  title: "Contact NPAK Construction",
  description: "Reach NPAK Construction for decking, roofing, and outdoor structure projects. Discovery calls reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 justify-center">
      <main className="w-full max-w-6xl px-6 py-16 md:px-10 lg:px-0 space-y-16">
        <section className="grid gap-8 rounded-3xl border border-white/10 bg-card/60 p-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Tell us about your project"
              description="The legacy WordPress form has been replaced with a reliable serverless form connected directly to our inbox."
            />
            <ul className="space-y-4 text-slate-200">
              {contactOptions.map((option) => (
                <li key={option.label}>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{option.label}</p>
                  {option.href ? (
                    <Link href={option.href} className="text-lg text-white hover:text-accent">
                      {option.value}
                    </Link>
                  ) : (
                    <p className="text-lg text-white">{option.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <ContactForm />
        </section>

        <section className="rounded-3xl border border-white/10 bg-card/60 p-10 space-y-4">
          <SectionHeading
            eyebrow="SEO keywords"
            title="Popular contact searches"
            description="We include 15 deck builder contact phrases so this form is easy to find in search."
          />
          <div className="flex flex-wrap gap-3 text-sm text-slate-100">
            {contactSeoKeywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-white/15 px-4 py-2">
                {keyword}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-card/70 p-10 space-y-4">
          <SectionHeading
            eyebrow="Next steps"
            title="What happens after you submit"
            description="Within 24 hours you receive an email confirming your request, a link to upload inspiration photos, and a booking link for a discovery call."
          />
        </section>
      </main>
    </div>
  );
}
