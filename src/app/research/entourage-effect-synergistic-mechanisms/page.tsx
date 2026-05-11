"use client";
import Link from 'next/link';
import { ArrowLeft, FlaskConical, Link2 } from 'lucide-react';
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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">The Entourage Effect: Synergistic Mechanisms</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Re-evaluating how cannabinoids and terpenoids interact to modulate the endocannabinoid system.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>The &quot;entourage effect&quot; proposes that the therapeutic impact of whole-plant cannabis is greater than the sum of its isolated components. While THC and CBD interact directly with the CB1 and CB2 receptors, terpenoids heavily modulate this interaction.</p>
    <p>For example, pinene acts as an acetylcholinesterase inhibitor, which can mitigate the short-term memory impairment typically caused by THC. Myrcene enhances the permeability of the blood-brain barrier, accelerating cannabinoid absorption. Clinical research by Dr. Ethan Russo has heavily documented these pharmacological synergies, proving that highly refined distillates (pure THC) lack the robust efficacy and targeted symptom relief provided by full-spectrum profiles. Breeding programs now heavily prioritize terpene fractions alongside total cannabinoid content to maximize these synergistic outcomes.</p>
          <p>Recent metabolomic profiling has expanded the entourage hypothesis to include the complex interplay of flavonoids and minor cannabinoids. Compounds like cannflavin A and B exhibit potent anti-inflammatory properties that, when combined with specific terpene ratios, drastically outperform the efficacy of isolated NSAIDs. This intricate biochemical web underscores the necessity of preserving the full spectrum of the plant&apos;s natural profile during extraction and breeding, rather than hyper-focusing on singular THC metrics.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Russo, E. B. (2011). Taming THC: potential cannabis synergy and phytocannabinoid-terpenoid entourage effects. British Journal of Pharmacology, 163(7), 1344–1364.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Gallily, R., et al. (2015). Overcoming the bell-shaped dose-response of cannabidiol by using cannabis extract enriched in CBD. Pharmacology & Pharmacy, 6(02), 75.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
