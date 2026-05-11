import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.oceangrownseeds.com'),
  title: {
    default: "Ocean Grown Seeds | Artisan Cannabis Genetics",
    template: "%s | Ocean Grown Seeds",
  },
  description: "Highly Hybridized Cannabis Genetics. Artisan crafted for optimal phenotypic expression. Explore the Ocean Grown Seeds archive for elite lineages, lab metrics, and grow protocols.",
  keywords: ["Ocean Grown Seeds", "Cannabis Genetics", "Cannabis Breeding", "Alien Rift", "Vader OG", "Cannabis Seeds", "Hybrid Cannabis"],
  openGraph: {
    title: "Ocean Grown Seeds | Premium Genetics Lab",
    description: "Highly Hybridized Cannabis Genetics. Artisan crafted for optimal results.",
    url: 'https://www.oceangrownseeds.com',
    siteName: 'Ocean Grown Seeds',
    images: [
      {
        url: '/logo-black.png',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ocean Grown Seeds',
    description: 'Highly Hybridized Cannabis Genetics. Artisan crafted for optimal results.',
    images: ['/logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceMono.variable} font-sans antialiased text-foreground bg-background`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
