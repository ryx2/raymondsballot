import type { Metadata } from "next";
import { Inter, Archivo, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-data",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Raymond's Ballot - 2026 State Primary Guides",
  description:
    "Pick your state and compare candidates in the 2026 primary guides.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <header className="border-b-[3px] border-ink bg-paper">
          <div className="mx-auto w-full max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display font-black text-2xl md:text-3xl tracking-tight leading-none">
                Raymond&rsquo;s<span className="text-accent">·</span>Ballot
              </span>
              <span className="hidden md:block eyebrow leading-none">
                State primaries · 2026
              </span>
            </Link>
            <nav className="flex items-center gap-5 text-sm font-medium">
              <Link href="/states" className="hover:text-accent">
                States
              </Link>
              <Link href="/" className="hover:text-accent">
                California
              </Link>
              <Link href="/compare" className="hover:text-accent">
                Compare
              </Link>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="mt-24 border-t-[3px] border-ink bg-paper-deep">
          <div className="mx-auto w-full max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-sm text-ink-muted">
            <div>
              <span className="eyebrow">Raymond&rsquo;s Ballot</span>{" "}
              <span className="ml-2">
                State-by-state primary guides, starting with California
                Governor on June 2, 2026.
              </span>
            </div>
            <div className="font-data text-xs">
              Last updated: April 29, 2026
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
