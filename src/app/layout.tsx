import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";

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
  description: "Ocean Grown Seeds & Genetics. Artisan crafted for optimal phenotypic expression. Explore the Ocean Grown Genetics archive for elite lineages like Maui Wowie, Vader OG, Dark Plasma, and Alien Rift.",
  keywords: ["Ocean Grown Seeds", "Ocean Grown Genetics", "Maui Wowie Seeds", "Vader OG", "Lumberjack Seeds", "Dark Plasma Strain", "Alien Rift Strain", "Witches Brew Strain", "Cannabis Genetics"],
  openGraph: {
    title: "Ocean Grown Seeds | Artisan Cannabis Genetics",
    description: "Ocean Grown Genetics & Seeds. Premium artisan crafted cannabis genetics including Maui Wowie, Vader OG, and Alien Rift.",
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YB0NNE62JG" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YB0NNE62JG');
          `}
        </Script>

        <AgeGate />
        {children}
        <Footer />
      </body>
    </html>
  );
}
