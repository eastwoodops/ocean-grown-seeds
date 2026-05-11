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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Hermaphroditism: Stress-Induced Sex Reversal</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Understanding the biological triggers of monoecious traits and evaluating the stability of feminized genetics.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>Cannabis is naturally dioecious, meaning individual plants are distinctly male or female. However, the plant possesses an evolutionary survival mechanism allowing it to become monoecious (hermaphroditic) under severe abiotic stress, developing pollen sacs to self-pollinate and ensure species survival.</p>
    <p>Common triggers include light leaks during the dark cycle, extreme temperature shifts, and drastic changes in root zone pH. In modern breeding, chemical agents like Silver Thiosulfate (STS) or Colloidal Silver are used to actively suppress ethylene production in female plants, forcing them to produce male pollen sacs. Because the plant genetically possesses no Y chromosome, this pollen is 99.9% female, the foundation of &quot;feminized&quot; seeds. However, using parent stock with a strong genetic predisposition to stress-induced hermaphroditism can result in unstable progeny that easily &quot;herm&quot; in commercial environments.</p>
          <p>It is important for breeders to differentiate between environmental hermaphroditism and true genetic monoecy. While extreme stress can force almost any female cannabis plant to produce anthers, true monoecious plants will express both male and female flowers naturally under perfect environmental conditions. Rigorous &apos;stress testing&apos;, intentionally exposing breeding stock to heat spikes, light cycle interruptions, and drought, is a mandatory practice to ensure that only the most resilient, strictly dioecious females are selected for commercial seed production.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Punja, Z. K. (2021). Emerging diseases of Cannabis sativa and sustainable management. Pest Management Science, 77(9), 3857-3870.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Lubin, R., et al. (2022). Modulation of sex determination in Cannabis sativa. Plant Science.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
