"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background relative pb-24">
      <header className="sticky top-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center border-b border-lab-border bg-white/80 backdrop-blur-md gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-lab-text">
          <Link href="/genetics" className="hover:text-primary transition-colors pb-1">GENETICS</Link>
          <Link href="/research" className="hover:text-primary transition-colors pb-1">RESEARCH</Link>
          <Link href="/archive" className="hover:text-primary transition-colors pb-1">ARCHIVE</Link>
        </nav>
        <div className="hidden md:block w-24"></div>
      </header>

      <div className="pt-16 px-4 md:px-8 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-foreground">Terms of Service</h1>
        
        <div className="prose max-w-none text-lab-text space-y-6">
          <p>Last Updated: January 1, 2026</p>
          <p>By accessing or using the Ocean Grown Seeds website, you agree to be bound by these Terms of Service.</p>
          
          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Age Requirement</h2>
          <p>You must be at least 21 years of age to access this website. By entering, you verify that you meet this age requirement.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Novelty & Souvenir Notice</h2>
          <p>All seeds are sold strictly for novelty, souvenir, and genetic preservation purposes. Ocean Grown Seeds does not condone, promote, or encourage the germination of seeds where it is prohibited by local, state, or federal law. It is the sole responsibility of the consumer to understand and comply with all applicable laws in their jurisdiction regarding the purchase, possession, and use of cannabis seeds.</p>
          
          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Intellectual Property</h2>
          <p>All content on this website, including but not limited to logos, text, graphics, images, and videos (including content curated from the VaderOG YouTube channel), is the intellectual property of Ocean Grown Seeds and is protected by applicable copyright and trademark laws.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Limitation of Liability</h2>
          <p>Ocean Grown Seeds assumes no liability for the actions of our customers. We do not provide germination guarantees, as germination is subject to local laws and environmental conditions outside of our control.</p>
        </div>
      </div>
    </main>
  );
}
