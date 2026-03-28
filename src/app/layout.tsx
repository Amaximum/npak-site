import type { Metadata } from "next";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NPAK Construction | Custom Decking & Roofing",
  description:
    "Toronto deck builders delivering bespoke outdoor spaces, premium roofing, and homeowner-first service since 2015.",
  metadataBase: new URL("https://npak.ca"),
  openGraph: {
    title: "NPAK Construction – Decking & Roofing Experts",
    description:
      "Crafting bespoke decks, high-performance roofs, and worry-free renovations across the GTA.",
    url: "https://npak.ca",
    siteName: "NPAK Construction",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-slate-50">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
