"use client";
import Link from 'next/link';
import { Droplet } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-topo opacity-5 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo-white.png" alt="Seal" width={40} height={40} className="opacity-90 invert" />
            <span className="font-bold tracking-tight text-xl">OCEAN GROWN</span>
          </div>
          <p className="text-lab-bg/70 max-w-sm mb-6 text-sm">
            Highly hybridized, artisan-crafted cannabis genetics. Cultivated with strict laboratory standards to ensure optimal phenotypic expression.
          </p>
          <div className="font-mono text-[10px] uppercase text-lab-bg/50 tracking-widest">
            © 2026 Ocean Grown Seeds. All rights reserved.
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 tracking-widest uppercase text-sm">Database</h4>
          <ul className="flex flex-col gap-4 text-sm text-lab-bg/70">
            <li><Link href="/genetics" className="hover:text-accent transition-colors">Genetics Catalog</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Strain Archive</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">R&D Protocols</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-widest uppercase text-sm">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-lab-bg/70">
            <li><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Contact Support</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Retail Locations</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
