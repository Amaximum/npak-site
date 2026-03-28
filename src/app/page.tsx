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
      import Link from "next/link";
      import Image from "next/image";
      import { SectionHeading } from "@/components/SectionHeading";
      import ContactForm from "@/components/ContactForm";
      import { locationProfiles } from "@/data/locations";

      const heroStats = [
        { label: "Deck & roof deliveries", value: "320+" },
        { label: "Average response", value: "24h" },
        { label: "Crew retention", value: "93%" },
      ];

      const services = [
        {
          name: "Signature decking",
          description:
            "Custom hardwood and low-maintenance composite decks engineered for Toronto winters, complete with drainage, lighting, and built-in seating.",
          items: ["Permit-ready drawings", "3D concept studies", "Premium hidden fasteners"],
        },
        {
          name: "Roofing systems",
          description:
            "Architectural shingles, flat roofing, and leak remediation with proactive maintenance programs and snow-load monitoring.",
          items: ["Infrared leak detection", "Extended warranties", "Tidy tear-offs"],
        },
        {
          name: "Outdoor structures",
          description:
            "Shade pavilions, pergolas, cabanas, and covered lounges sized to your yard and tied into existing utilities.",
          items: ["Integrated lighting", "Hidden drainage", "Custom metalwork"],
        },
        {
          name: "Project leadership",
          description:
            "Dedicated site leads, weekly reporting, and one point of contact coordinating trades, suppliers, and inspectors.",
          items: ["Transparent cost tracking", "Licensed trades", "Hospitality-level cleanup"],
        },
      ];

      const aiHighlights = [
        "AI-assisted takeoffs ensure accurate material orders and less waste",
        "Drone and LiDAR captures feed into photorealistic 3D walkthroughs",
        "Predictive schedules flag weather risks before they derail the build",
        "Customers review design iterations inside an AR viewer before fabrication",
      ];

      const process = [
        {
          title: "Discovery call",
          detail: "Share site photos, budgets, and timelines so we can scope the journey and align on priorities.",
        },
        {
          title: "Design + estimate",
          detail: "We translate your wish list into drawings, renders, and a transparent schedule with milestone billing.",
        },
        {
          title: "Build + care",
          detail: "Our crew executes, documents each inspection, and delivers a spotless space ready for your first gathering.",
        },
      ];

      const testimonials = [
        {
          quote:
            "Every detail was planned before the first screw. We approved our deck virtually, then watched the crew execute exactly what we saw on screen.",
          author: "Stefanie, North York",
        },
        {
          quote:
            "NPAK handled permits, condo board approvals, and even our landscaper’s schedule—zero surprises and a flawless rooftop.",
          author: "Marcus, Downtown Toronto",
        },
      ];

      const featuredLocations = locationProfiles.slice(0, 6);

      const homeSeoKeywords = [
        "deck builder Toronto",
        "deck contractor GTA",
        "custom deck design Toronto",
        "outdoor living builder Toronto",
        "luxury deck company Ontario",
        "composite deck installer Toronto",
        "backyard deck renovation GTA",
        "cedar deck builder Toronto",
        "rooftop deck contractor Toronto",
        "pergola and deck builder",
        "deck project management Toronto",
        "AI deck design Toronto",
        "deck and roof contractor Toronto",
        "deck permit services Toronto",
        "deck builder near me Toronto",
      ] as const;

      const faqs = [
        {
          question: "Do you replicate the legacy NPAK services?",
          answer:
            "Yes. Every legacy WordPress page now maps to a modern Next.js route with the same service mix plus richer photos and copy.",
        },
        {
          question: "Where do you operate?",
          answer:
            "Toronto, North York, Mississauga, Brampton, Vaughan, Richmond Hill, Aurora, Markham, Etobicoke, and select cottage builds.",
        },
        {
          question: "How fast can I get a quote?",
          answer: "Most homeowners receive a digital proposal within 48 hours after our initial discovery call.",
        },
        {
          question: "Will the new site preserve SEO?",
          answer:
            "We recreate each legacy URL or redirect it with 301s, keeping authority intact while letting Google crawl fresh components.",
        },
      ];

      export default function Home() {
        return (
          <div className="flex flex-1 justify-center bg-transparent">
            <main className="w-full max-w-6xl px-6 py-16 md:px-10 lg:px-0">
              <section className="grid gap-10 rounded-3xl border border-white/10 bg-card/60 p-10 shadow-[0_40px_160px_rgba(2,6,23,0.6)] lg:grid-cols-[1.25fr_0.85fr]">
                <div className="space-y-8">
                  <p className="section-eyebrow">From legacy WordPress to Vercel-native</p>
                  <h1 className="section-title text-4xl leading-tight text-white sm:text-5xl">
                    Decks, roofs, and outdoor structures tailored for Toronto rituals.
                  </h1>
                  <p className="text-lg text-slate-200">
                    NPAK Construction preserves every beloved WordPress page—now rebuilt on a faster Next.js platform with modern
                    storytelling, AI-enhanced planning tools, and forms that deliver straight to npakmax@gmail.com.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact-us"
                      className="group flex items-center gap-2 rounded-full border border-transparent bg-accent px-6 py-3 font-semibold text-slate-900 transition hover:shadow-[0_20px_40px_rgba(34,211,238,0.35)]"
                    >
                      Book a discovery call
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
                  <div className="grid gap-4 sm:grid-cols-3">
                    {heroStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-surface/80 p-4 text-center">
                        <p className="text-2xl font-semibold text-white">{stat.value}</p>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative rounded-2xl border border-white/10 bg-surface px-6 py-8">
                  <div className="absolute inset-x-6 top-6 grid grid-cols-2 gap-4 text-xs text-slate-400">
                    <div className="rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-4">
                      <p className="text-3xl font-semibold text-white">+38%</p>
                      <p>average property value lift</p>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-gradient-to-br from-white/5 to-white/0 p-4">
                      <p className="text-3xl font-semibold text-white">2015</p>
                      <p>year founded</p>
                    </div>
                  </div>
                  <div className="pt-32">
                    <Image src="/npak-mark.svg" alt="NPAK brand mark" width={96} height={96} priority />
                    <p className="mt-6 text-lg text-slate-200">
                      “NPAK stands for Nurturing, Passion, Adaptability, and Knowledge. We carry the same values into every deck and
                      roof we deliver across the GTA.”
                    </p>
                    <p className="mt-4 text-sm text-slate-400">— Nikita & Pavel, Co-founders</p>
                  </div>
                </div>
              </section>

              <section className="mt-16 space-y-10 rounded-3xl border border-white/10 bg-card/60 p-10">
                <SectionHeading eyebrow="Capabilities" title="Everything the legacy site promised, now faster" />
                <div className="grid gap-6 md:grid-cols-2">
                  {services.map((service) => (
                    <article key={service.name} className="rounded-3xl border border-white/10 bg-surface p-8">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                        <span className="text-sm uppercase tracking-[0.2em] text-slate-400">NPAK</span>
                      </div>
                      <p className="mt-4 text-slate-300">{service.description}</p>
                      <ul className="mt-6 space-y-2 text-sm text-slate-200">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>

              <section className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-card/80 p-10 md:grid-cols-[1fr_1fr]">
                <div>
                  <SectionHeading eyebrow="Innovation" title="AI-assisted planning for every deck" />
                  <p className="mt-4 text-slate-300">
                    Migrating to Next.js unlocked smarter tooling. Our crews now tap into computer vision, generative design, and
                    predictive scheduling so your project launches with fewer site visits and cleaner timelines.
                  </p>
                </div>
                <div className="grid gap-3">
                  {aiHighlights.map((highlight) => (
                    <div key={highlight} className="rounded-2xl border border-white/5 bg-surface/70 p-4 text-slate-100">
                      {highlight}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-16 space-y-6 rounded-3xl border border-white/10 bg-card/60 p-10">
                <SectionHeading eyebrow="Process" title="Three clear stages" />
                <div className="grid gap-4 md:grid-cols-3">
                  {process.map((step, index) => (
                    <article key={step.title} className="rounded-3xl border border-white/10 bg-surface p-6">
                      <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Step 0{index + 1}</div>
                      <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-slate-300">{step.detail}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="mt-16 space-y-10 rounded-3xl border border-white/10 bg-card/70 p-10">
                <SectionHeading eyebrow="Locations" title="Local crews across the GTA" />
                <div className="grid gap-6 lg:grid-cols-3">
                  {featuredLocations.map((location) => (
                    <article key={location.city} className="rounded-3xl border border-white/10 bg-surface p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold text-white">{location.city}</h3>
                        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Deck Builder</span>
                      </div>
                      <p className="mt-4 text-slate-300">{location.summary}</p>
                      <ul className="mt-4 space-y-2 text-sm text-slate-200">
                        {location.highlights.slice(0, 3).map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/deck-builder/${location.slug}`}
                        className="mt-6 inline-flex items-center gap-2 text-accent"
                      >
                        Explore city page
                        <span aria-hidden>→</span>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>

              <section className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-card/80 p-10 md:grid-cols-[1fr_1fr]">
                <div>
                  <SectionHeading eyebrow="Testimonials" title="Homeowners on the new experience" />
                </div>
                <div className="grid gap-4">
                  {testimonials.map((testimonial) => (
                    <blockquote key={testimonial.author} className="rounded-3xl border border-white/10 bg-surface p-6 text-slate-100">
                      <p className="text-lg">“{testimonial.quote}”</p>
                      <footer className="mt-4 text-sm text-slate-400">{testimonial.author}</footer>
                    </blockquote>
                  ))}
                </div>
              </section>

              <section className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-card/60 p-10 md:grid-cols-[0.8fr_1.2fr]">
                <div className="space-y-4">
                  <SectionHeading eyebrow="Stay informed" title="FAQs about the rebuild" />
                  <p className="text-slate-300">
                    Transparency doesn’t stop at construction. Here’s how we’re structuring the digital migration so Google, clients,
                    and your neighbourhood all stay in sync.
                  </p>
                </div>
                <div className="grid gap-4">
                  {faqs.map((faq) => (
                    <article key={faq.question} className="rounded-3xl border border-white/10 bg-surface p-6">
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                      <p className="mt-3 text-slate-300">{faq.answer}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="mt-16 space-y-6 rounded-3xl border border-white/10 bg-card/70 p-10">
                <SectionHeading
                  eyebrow="SEO keywords"
                  title="How homeowners search for deck pros"
                  description="Собрали популярные запросы, по которым клиенты находят NPAK: deck builder, deck contractor, outdoor living и т.д."
                />
                <div className="flex flex-wrap gap-3 text-sm text-slate-100">
                  {homeSeoKeywords.map((keyword) => (
                    <span key={keyword} className="rounded-full border border-white/15 px-4 py-2">
                      {keyword}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mt-16 grid gap-10 rounded-3xl border border-white/10 bg-card/70 p-10 md:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  <SectionHeading eyebrow="Contact" title="Forms that finally land in your inbox" />
                  <p className="text-slate-300">
                    The legacy WordPress form has been replaced with a reliable serverless handler wired directly to
                    npakmax@gmail.com. Submit the form and we’ll respond within one business day.
                  </p>
                  <ul className="space-y-2 text-slate-100">
                    <li>Phone: (289) 812-4560</li>
                    <li>Email: npakmax@gmail.com</li>
                    <li>Service area: Entire Greater Toronto Area</li>
                  </ul>
                </div>
                <ContactForm />
              </section>
            </main>
          </div>
        );
      }
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
