"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-topo opacity-5 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo-white.png" alt="Seal" width={40} height={40} className="opacity-90" />
            <span className="font-bold tracking-tight text-xl">OCEAN GROWN</span>
          </div>
          <p className="text-lab-bg/70 max-w-sm mb-6 text-sm leading-relaxed">
            Highly hybridized, artisan-crafted cannabis genetics. Cultivated with strict laboratory standards to ensure optimal phenotypic expression.
          </p>
          <div className="flex gap-4 mb-8">
            <a href="https://www.instagram.com/oceangrownseeds/" target="_blank" rel="noopener noreferrer" className="text-lab-bg/50 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/@oceangrownseeds" target="_blank" rel="noopener noreferrer" className="text-lab-bg/50 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
            <a href="https://www.facebook.com/OceanGrownSeeds" target="_blank" rel="noopener noreferrer" className="text-lab-bg/50 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://twitter.com/oceangrownseeds" target="_blank" rel="noopener noreferrer" className="text-lab-bg/50 hover:text-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
          </div>
          <div className="font-mono text-[10px] uppercase text-lab-bg/30 tracking-widest">
            © 2026 Ocean Grown Seeds. All rights reserved.
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 tracking-widest uppercase text-sm">Database</h4>
          <ul className="flex flex-col gap-4 text-sm text-lab-bg/70">
            <li><Link href="/genetics" className="hover:text-primary transition-colors">Genetics Catalog</Link></li>
            <li><Link href="/research" className="hover:text-primary transition-colors">Clinical Research</Link></li>
            <li><Link href="/archive" className="hover:text-primary transition-colors">Strain Archive</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-widest uppercase text-sm">Legal & Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-lab-bg/70">
            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
