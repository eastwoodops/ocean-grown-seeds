"use client";
import Link from 'next/link';
import { ArrowLeft, BookOpen, FlaskConical, Link2 } from 'lucide-react';
import Image from 'next/image';

export default function Article() {
  return (
    <main className="min-h-screen bg-background relative pb-24">
      <header className="sticky top-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center border-b border-lab-border bg-white/80 backdrop-blur-md gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-lab-text">
          <Link href="/genetics" className="hover:text-primary transition-colors pb-1">GENETICS</Link>
          <Link href="/research" className="text-primary border-b-2 border-primary pb-1">RESEARCH</Link>
          <Link href="#" className="hover:text-primary transition-colors pb-1">ARCHIVE</Link>
        </nav>
        <div className="hidden md:block w-24"></div>
      </header>

      <div className="pt-8 px-4 md:px-8 max-w-4xl mx-auto">
        <Link href="/research" className="inline-flex items-center gap-2 text-xs font-mono text-lab-text hover:text-primary transition-colors mb-8">
          <ArrowLeft size={14} /> BACK TO PUBLICATIONS
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">D-Limonene: Anxiolytic & Uplifting Properties</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Research highlighting the stress-relieving, immunostimulating, and mood-elevating mechanisms of Limonene.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>D-Limonene is a cyclic monoterpene that provides the distinct citrus, lemon, and lime aromatic profiles found in many sativa-leaning hybrids. Beyond its pungent olfactory footprint, limonene is heavily researched for its profound effects on the central nervous system.</p>
     <p>Clinical data has repeatedly shown that the inhalation of limonene vapor acts as a rapid and effective anxiolytic. In neuropharmacological studies, limonene has been observed to regulate serotonin and dopamine levels in the brain. A widely cited study on depressive states (Komori et al., 1995) found that the introduction of citrus fragrance (limonene) significantly normalized CD4/8 immune ratios and effectively reduced required doses of clinical antidepressants.</p>
     <p>Cultivars expressing high concentrations of Limonene are traditionally leveraged for daytime use, targeted heavily at combatting lethargy, depressive episodes, and chronic stress.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Lima, N. G., et al. (2013). Anxiolytic-like activity and GC-MS analysis of (R)-(+)-limonene fragrance, a natural compound found in foods and plants. Pharmacology Biochemistry and Behavior, 103(3), 450-454.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Komori, T., et al. (1995). Effects of citrus fragrance on immune function and depressive states. Neuroimmunomodulation, 2(3), 174-180.</span></li>
           </ul>
        </div>

        <h3 className="text-2xl font-bold mb-6">Targeted Specimen Inventory</h3>
        <p className="text-lab-text mb-6">The following verified genetics from the Ocean Grown catalog express high concentrations of this terpene profile:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           
            <Link href="/genetics/jawa-pie" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-001</div>
               <div className="font-bold text-foreground group-hover:text-primary">JAWA PIE</div>
            </Link>
            <Link href="/genetics/vader-og" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-002</div>
               <div className="font-bold text-foreground group-hover:text-primary">VADER OG</div>
            </Link>
            <Link href="/genetics/obi-wan-og" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-004</div>
               <div className="font-bold text-foreground group-hover:text-primary">OBI WAN OG</div>
            </Link>
            <Link href="/genetics/dreadnought" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-007</div>
               <div className="font-bold text-foreground group-hover:text-primary">DREADNOUGHT</div>
            </Link>
            <Link href="/genetics/jawa-juice" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-010</div>
               <div className="font-bold text-foreground group-hover:text-primary">JAWA JUICE</div>
            </Link>
            <Link href="/genetics/maui-wowie" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-012</div>
               <div className="font-bold text-foreground group-hover:text-primary">MAUI WOWIE</div>
            </Link>
        </div>
      </div>
    </main>
  );
}
