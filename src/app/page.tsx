import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Decking",
    summary:
      "Custom decks in premium lumber or modern composites with lighting, privacy, and built-in seating options.",
    points: ["3D design preview", "Permit-ready drawings", "Weatherproof finishes"],
  },
  {
    title: "Roofing",
    summary:
      "High-performance roofing systems engineered for GTA winters with proactive maintenance plans.",
    points: ["Architectural shingles", "Leak detection", "Snow load mitigation"],
  },
  {
    title: "Outdoor Structures",
    summary:
      "Pavilions, pergolas, and covered lounges that extend the living space while meeting strict safety codes.",
    points: ["Integrated drainage", "Hidden fasteners", "Custom metalwork"],
  },
  {
    title: "Project Management",
    summary:
      "Dedicated site leads, transparent budgets, and milestone reporting keep every build predictable.",
    points: ["Weekly updates", "Vendor coordination", "White-glove handover"],
  },
] as const;

const differentiators = [
  "Meticulous craftsmanship and safety-first builds",
  "Designs tailored to each property and homeowner",
  "Transparent pricing with code-compliant documentation",
  "Crew of licensed carpenters, roofers, and electricians",
  "Access to boutique material suppliers",
  "Complimentary consultations and planning support",
];

const stats = [
  { label: "Projects Completed", value: "320+" },
  { label: "Working Hours", value: "28K" },
  { label: "Happy Clients", value: "290" },
];

const process = [
  {
    title: "Call or Book",
    detail:
      "Share your wishlist, photos, and any architectural drawings so we can zero in on the scope.",
  },
  {
    title: "Estimate",
    detail:
      "Receive a transparent proposal outlining materials, phasing, and permitting requirements.",
  },
  {
    title: "Project Completion",
    detail:
      "We build, inspect, and hand over the site spotless—ready for your first gathering.",
  },
];

const locations = [
  "Toronto",
  "Mississauga",
  "Vaughan",
  "North York",
  "Brampton",
  "Etobicoke",
  "Richmond Hill",
];

const faqs = [
  {
    question: "How long has NPAK been in business?",
    answer:
      "We launched in 2015 and have specialized in premium decking and roofing projects across the GTA ever since.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Greater Toronto Area including the west end suburbs, York region, and select cottage country builds.",
  },
  {
    question: "What makes NPAK different?",
    answer:
      "NPAK stands for Nurturing, Passion, Adaptability, and Knowledge—core values that drive each decision on site.",
  },
  {
    question: "Do you assist with permits?",
    answer:
      "Yes. We prepare permit drawings, coordinate inspections, and liaise with condo boards when required.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-transparent font-sans">
      <main className="w-full max-w-6xl px-6 py-16 md:px-10 lg:px-0">
        <section className="grid gap-10 rounded-3xl border border-white/10 bg-card/60 p-10 shadow-[0_40px_120px_rgba(2,6,23,0.5)] lg:grid-cols-[1.25fr_0.85fr]">
          <div className="space-y-8">
            <p className="section-eyebrow">Nurturing Passion. Adapting Knowledge.</p>
            <h1 className="section-title text-4xl leading-tight text-white sm:text-5xl">
              Crafting decks, roofs, and outdoor structures that feel custom-built for your rituals.
            </h1>
            <p className="text-lg text-slate-200">
              From the first sketch to the final inspection, NPAK Construction transforms Toronto backyards and rooftops into
              livable extensions—combining boutique materials, disciplined project management, and hospitality-level service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://npak.ca/contact-us"
                className="group flex items-center gap-2 rounded-full border border-transparent bg-accent px-6 py-3 text-slate-900 font-semibold transition hover:shadow-[0_20px_40px_rgba(34,211,238,0.35)]"
              >
                Request a consultation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="tel:+12898124560"
                className="flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white"
              >
                <span className="h-2 w-2 rounded-full bg-accent-warm" aria-hidden />
                (289) 812-4560
              </Link>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Trusted by homeowners in</p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-100">
                {["Toronto", "Etobicoke", "Vaughan", "Muskoka"].map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/10 px-3 py-1 text-slate-200/90 backdrop-blur"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-surface px-6 py-8">
            <div className="absolute inset-x-6 top-6 grid grid-cols-2 gap-4 text-xs text-slate-400">
              <div className="rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-4">
                <p className="text-3xl font-semibold text-white">24hr</p>
                <p>response time</p>
              </div>
              <div className="rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-4">
                <p className="text-3xl font-semibold text-white">+38%</p>
                <p>property value lift avg</p>
              </div>
            </div>
            <div className="pt-32">
              <Image src="/npak-mark.svg" alt="NPAK mark" width={96} height={96} priority />
              <p className="mt-6 text-lg text-slate-200">
                “We build as if we live there. Every beam is scribed, every seam sealed, every homeowner guided.”
              </p>
              <p className="mt-4 text-sm text-slate-400">— Co-founders Nikita & Pavel</p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-card/80 p-4 text-center">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <p className="section-eyebrow">What we build</p>
          <h2 className="section-title text-3xl text-white">Services engineered for Canadian climates</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-white/10 bg-card/60 p-6 backdrop-blur"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <span className="text-sm text-slate-400">Turnkey delivery</span>
                </div>
                <p className="text-slate-200">{service.summary}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-surface/80 p-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="section-eyebrow">Why choose us</p>
            <h2 className="section-title text-3xl text-white">Built on the NPAK values</h2>
            <p className="mt-4 text-slate-300">
              NPAK stands for Nurturing, Passion, Adaptability, and Knowledge. It is how we collaborate with homeowners,
              trades, and city inspectors to keep projects calm, transparent, and on schedule.
            </p>
            <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <p className="text-lg text-slate-100">
                In 2015 we started in a small local office. Now we are the call homeowners make when they want craftsmanship
                with concierge-level service.
              </p>
              <p className="mt-4 text-sm text-slate-400">Crafting visions, building dreams – NPAK Services.</p>
            </div>
          </div>
          <ul className="grid gap-4">
            {differentiators.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-card/70 p-4 text-sm text-slate-200"
              >
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-accent">
                  ●
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-card/70 p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="section-eyebrow">Process</p>
              <h2 className="section-title text-3xl text-white">How it works</h2>
            </div>
            <Link href="https://npak.ca/contact-us" className="text-sm uppercase tracking-[0.3em] text-accent">
              Book a walkthrough ↗
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {process.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/5 bg-surface/70 p-5">
                <p className="text-sm text-slate-400">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{step.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-card/70 p-8">
            <p className="section-eyebrow">Service areas</p>
            <h2 className="section-title text-3xl text-white">We build across the Greater Toronto Area</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 text-slate-200">
              {locations.map((city) => (
                <div key={city} className="rounded-2xl border border-white/5 bg-surface/60 px-4 py-3">
                  {city}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 p-8">
            <p className="section-eyebrow">Ready to plan?</p>
            <h2 className="section-title text-3xl text-white">Let’s design your next project</h2>
            <p className="mt-4 text-slate-200">
              Call, email, or send drawings any time. We respond within 24 hours and schedule site visits within the week.
            </p>
            <div className="mt-6 space-y-4 text-lg text-white">
              <Link href="tel:+12898124560" className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden /> (289) 812-4560
              </Link>
              <Link href="mailto:maximumdecks@gmail.com" className="flex items-center gap-3 text-slate-200">
                <span className="h-2 w-2 rounded-full bg-accent-soft" aria-hidden /> maximumdecks@gmail.com
              </Link>
              <Link href="https://npak.ca/contact-us" className="flex items-center gap-3 text-slate-100">
                <span className="h-2 w-2 rounded-full bg-accent-warm" aria-hidden />
                Fill out the project brief
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-card/70 p-8">
          <p className="section-eyebrow">FAQs</p>
          <h2 className="section-title text-3xl text-white">Answers for your first call</h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-white/5 bg-surface/70 p-5">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
