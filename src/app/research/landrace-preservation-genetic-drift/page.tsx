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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Landrace Preservation & Genetic Drift</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">The critical importance of conserving indigenous, unhybridized cultivars for agricultural biodiversity.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>Landrace strains are indigenous varieties of cannabis that have adapted naturally to their specific geographical environments over centuries without intentional hybridization by humans (e.g., Hindu Kush, Thai, Durban Poison). These unadulterated genetics hold immense biodiversity.</p>
    <p>Modern commercial breeding heavily relies on a massive genetic bottleneck, crossing the same elite &quot;poly-hybrids&quot; repeatedly to maximize THC and bag appeal. This practice causes genetic drift and a loss of rare alleles responsible for unique pest resistance, drought tolerance, and novel minor cannabinoids. Preserving landrace lines is a biological imperative, serving as an immutable genetic vault that breeders must return to in order to introduce hybrid vigor and disease resistance back into heavily bottlenecked commercial gene pools.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Small, E. (2015). Evolution and Classification of Cannabis sativa. Botanical Review, 81(3), 189-294.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Clarke, R. C., & Merlin, M. D. (2013). Cannabis: Evolution and Ethnobotany. University of California Press.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
