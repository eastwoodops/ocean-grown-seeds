"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Dna } from 'lucide-react';

export default function About() {
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

      <div className="pt-16 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-accent-dark mb-4">
          <Dna size={16} />
          <span className="font-mono text-xs uppercase tracking-widest">Heritage & History</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-foreground">Decades of Dedication.</h1>
        
        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <p>
            Ocean Grown Seeds was born out of necessity. Over 20 years ago, as a California Medical Patient navigating an emerging but deeply inconsistent landscape, VaderOG began his journey. Frustrated by the lack of reliable, stable genetics that delivered actual medical efficacy, he set out to cultivate and breed his own.
          </p>
          <p>
            What started as an isolated pursuit for quality medicine evolved into an obsession with the cannabis genome. Long before the era of commercial mega-facilities, VaderOG was systematically pheno-hunting through the finest legacy cuts available in Southern California, seeking to lock down recessive traits, isolate rare terpene profiles, and stabilize heavy-yielding, high-resin cultivars.
          </p>
          <p>
            Ocean Grown Seeds is the culmination of that two-decade pursuit. 
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4">The Breeding Philosophy</h2>
          <p>
            Our hybridization protocols are strict and uncompromising. We do not rely on random pollen chucking. Every specimen in the Ocean Grown catalog is the result of methodical Mendelian selection. By identifying dominant and recessive expressions across F1, F2, and backcrossed generations, we ensure that the seeds our community relies upon exhibit extreme stability and vigorous growth.
          </p>
          <p>
            From the development of our flagship stud, Alien Rift, to the stabilization of legendary lineages like Vader OG and Jawa Pie, our focus remains on providing cultivators—from the home medical tent to commercial canopies—with genetics that produce profound resin, unmatched organoleptic profiles, and true therapeutic relief.
          </p>
          <div className="mt-12 p-6 bg-topo border border-lab-border rounded-xl">
             <p className="font-mono text-sm text-lab-text mb-0">
               &quot;Just a Cosmic Astronaut piloting my way through the Cannabis Universe.&quot;<br/>
               — VaderOG
             </p>
          </div>
        </div>
      </div>
    </main>
  );
}
