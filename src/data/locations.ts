export type LocationProfile = {
  slug: string;
  legacySlug: string;
  city: string;
  hero: string;
  summary: string;
  description: string;
  highlights: string[];
  neighborhoods: string[];
};

export const locationProfiles: LocationProfile[] = [
  {
    slug: "toronto",
    legacySlug: "deck-builder-toronto",
    city: "Toronto",
    hero: "Deck Builder Toronto",
    summary:
      "Custom decks that match Toronto's mix of Victorian homes, modern infill builds, and boutique condos.",
    description:
      "From Leaside rooftops to lakefront backyards, Toronto clients choose NPAK for concierge-level service, permit-ready drawings, and installations that respect dense urban lots.",
    highlights: [
      "Permit & condo board coordination",
      "Snow-load compliant framing",
      "Integrated lighting & privacy walls",
    ],
    neighborhoods: ["Leaside", "The Beaches", "High Park", "Rosedale"],
  },
  {
    slug: "north-york",
    legacySlug: "deck-builder-north-york",
    city: "North York",
    hero: "Deck Builder North York",
    summary:
      "Engineered decks and outdoor lounges for expanding multi-generational homes in North York.",
    description:
      "We maximize every foot of suburban lots with multi-level decks, dining pavilions, and covered lounges that protect against heavy snow loads.",
    highlights: [
      "Multi-level layouts",
      "Gas line + electrical coordination",
      "Frost-protected footings",
    ],
    neighborhoods: ["Bayview Village", "Don Mills", "Willowdale"],
  },
  {
    slug: "mississauga",
    legacySlug: "deck-builder-mississauga",
    city: "Mississauga",
    hero: "Deck Builder Mississauga",
    summary:
      "Composite decks and covered porches designed for family entertaining in Mississauga.",
    description:
      "Whether it's Port Credit rooftops or Churchill Meadows backyards, we combine low-maintenance materials with built-in seating, planters, and privacy screens.",
    highlights: [
      "Composite + PVC expertise",
      "Hidden fastener systems",
      "Outdoor kitchens + storage",
    ],
    neighborhoods: ["Port Credit", "Erin Mills", "Churchill Meadows"],
  },
  {
    slug: "brampton",
    legacySlug: "deck-builder-brampton",
    city: "Brampton",
    hero: "Deck Builder Brampton",
    summary:
      "Durable decks and pergolas tailored to fast-growing Brampton neighbourhoods.",
    description:
      "We help homeowners navigate architectural guidelines while delivering bold rail systems, lighting, and stair designs that match custom stonework.",
    highlights: [
      "Architectural guideline support",
      "Premium railing options",
      "Built-in planters + screens",
    ],
    neighborhoods: ["Castlemore", "Mount Pleasant", "Springdale"],
  },
  {
    slug: "vaughan",
    legacySlug: "deck-builder-vaughan",
    city: "Vaughan",
    hero: "Deck Builder Vaughan",
    summary:
      "Luxury decks, cabanas, and rooftop courtyards for Vaughan estates and townhomes.",
    description:
      "We pair exotic hardwoods and metal details with automated louver roofs and integrated drainage for year-round enjoyment.",
    highlights: [
      "Hardwood + metal combinations",
      "Automated louver roofs",
      "Integrated drainage",
    ],
    neighborhoods: ["Kleinburg", "Maple", "Thornhill"],
  },
  {
    slug: "richmond-hill",
    legacySlug: "deck-builder-richmond-hill",
    city: "Richmond Hill",
    hero: "Deck Builder Richmond Hill",
    summary:
      "Decks that bridge mature trees, pools, and garden suites for Richmond Hill properties.",
    description:
      "We specialize in structural spans over grade changes, poolside platforms, and lighting scenes that extend late into the evening.",
    highlights: [
      "Structural spans over slopes",
      "Poolside platforms",
      "Layered lighting scenes",
    ],
    neighborhoods: ["Mill Pond", "Oak Ridges", "Jefferson"],
  },
  {
    slug: "aurora",
    legacySlug: "deck-builder-aurora",
    city: "Aurora",
    hero: "Deck Builder Aurora",
    summary:
      "Tailored decks for Aurora's estate lots, ravine edges, and golf-course communities.",
    description:
      "We blend natural tones with glass railing to keep ravine views open while integrating fire features and lounge seating.",
    highlights: [
      "Glass + aluminum railing",
      "Fire feature integration",
      "Low-voltage pathway lighting",
    ],
    neighborhoods: ["Aurora Highlands", "Bayview Northeast", "Aurora Estates"],
  },
  {
    slug: "markham",
    legacySlug: "deck-builder-markham",
    city: "Markham",
    hero: "Deck Builder Markham",
    summary:
      "Smart decks for Markham's tech-forward homeowners and heritage streets alike.",
    description:
      "We combine modern composite systems with traditional trim details to suit both Unionville heritage homes and new smart-home builds.",
    highlights: [
      "Smart lighting + controls",
      "Heritage-friendly trim",
      "Custom privacy partitions",
    ],
    neighborhoods: ["Unionville", "Cornell", "Berczy"],
  },
  {
    slug: "etobicoke",
    legacySlug: "deck-builder-etobicoke",
    city: "Etobicoke",
    hero: "Deck Builder Etobicoke",
    summary:
      "Structural decks and rooftop terraces that embrace Etobicoke's modern architecture.",
    description:
      "From Humber Bay townhomes to Kingsway backyards, we deliver cantilever stairs, steel accents, and storm-ready waterproofing.",
    highlights: [
      "Cantilever stair design",
      "Steel + timber accents",
      "Waterproof rooftop assemblies",
    ],
    neighborhoods: ["Humber Bay", "The Kingsway", "Long Branch"],
  },
];

export const locationMap = Object.fromEntries(
  locationProfiles.map((profile) => [profile.slug, profile])
);

export const legacyRewrites = locationProfiles.map((profile) => ({
  source: `/${profile.legacySlug}`,
  destination: `/deck-builder/${profile.slug}`,
}));
