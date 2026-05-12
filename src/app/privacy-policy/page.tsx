"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="prose max-w-none text-lab-text space-y-6">
          <p>Last Updated: January 1, 2026</p>
          <p>Ocean Grown Seeds ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Ocean Grown Seeds.</p>
          
          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p>We do not directly process payments or collect highly sensitive financial data on this domain. We may collect information you provide directly to us when you subscribe to our newsletter, request customer support, or communicate with us via third-party social platforms.</p>
          
          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Use of Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services. This includes responding to your comments, questions, and requests, as well as providing customer service and sending you technical notices or updates regarding genetics drops.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Third-Party Services</h2>
          <p>Our website links to authorized third-party distributors (such as Lumberjack Seed Source). Please note that when you navigate to these external sites to acquire novelty seeds, you are subject to their respective privacy policies and data collection practices.</p>

          <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Age Restriction</h2>
          <p>Our website is strictly intended for individuals 21 years of age or older. We do not knowingly collect personal information from minors. If we learn that we have collected personal information from a minor, we will delete that information immediately.</p>
        </div>
      </div>
    </main>
  );
}
