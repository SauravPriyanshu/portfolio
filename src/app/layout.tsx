import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SkipToContent } from "@/components/ui/skip-to-content";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { profile } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saurav Priyanshu | Full-Stack Developer",
  description: profile.tagline,
  metadataBase: new URL('https://sauravpriyanshu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Saurav Priyanshu | Full-Stack Developer",
    description: profile.tagline,
    url: 'https://sauravpriyanshu.com',
    siteName: 'Saurav Priyanshu Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Saurav Priyanshu | Full-Stack Developer",
    description: profile.tagline,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": profile.name,
  "jobTitle": profile.title,
  "url": "https://sauravpriyanshu.com",
  "sameAs": [
    profile.links.github,
    profile.links.linkedin
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden selection:bg-[var(--accent-soft)] selection:text-[var(--accent)]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SkipToContent />
          <ScrollProgress />
          <Navbar />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
