"use client";
import Link from 'next/link';
import { ArrowLeft, BookOpen, FlaskConical, Link2 } from 'lucide-react';
import Image from 'next/image';

export default function Article() {
  return (
    <main className="min-h-screen bg-background relative pb-24">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "β-Caryophyllene: The Dietary Cannabinoid",
  "description": "Examining the unique mechanism of action wherein a terpene acts as a direct CB2 receptor agonist.",
  "author": {
    "@type": "Organization",
    "name": "Ocean Grown Seeds",
    "url": "https://www.oceangrownseeds.com/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ocean Grown Seeds",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.oceangrownseeds.com/logo-black.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.oceangrownseeds.com/research/caryophyllene-dietary-cannabinoid"
  }
}) }}
      />
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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">β-Caryophyllene: The Dietary Cannabinoid</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Examining the unique mechanism of action wherein a terpene acts as a direct CB2 receptor agonist.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>β-Caryophyllene (BCP) represents a groundbreaking anomaly in phytocannabinoid science. Unlike other terpenes that influence the olfactory system or alter blood-brain barrier permeability, BCP is recognized as a functional dietary cannabinoid. It is famously found in black pepper, cloves, and rosemary.</p>
     <p>A key 2008 study published in the <em>Proceedings of the National Academy of Sciences (PNAS)</em> definitively established that β-caryophyllene selectively binds to the CB2 cannabinoid receptor (Gertsch et al., 2008). Because CB2 receptors are primarily located in the peripheral organs and the immune system (rather than the central nervous system), BCP provides potent anti-inflammatory and immunomodulatory effects without the psychoactive toxicity associated with CB1 agonism.</p>
     <p>In addition to inflammation management, subsequent studies (Bahi et al., 2014) have demonstrated that BCP exerts anxiolytic (anti-anxiety) and antidepressant effects, making Caryophyllene-dominant cultivars ideal for patients seeking systemic relief while maintaining cognitive clarity.</p>
          <p>In fact, the therapeutic implications of CB2 receptor agonism extend into neuroprotection and gastrointestinal health. Clinical models have demonstrated that beta-caryophyllene can mitigate inflammatory bowel disease (IBD) symptoms and attenuate neuroinflammation associated with degenerative diseases. This makes caryophyllene a critical target for breeders focused on systemic, non-intoxicating medical applications.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Gertsch, J., et al. (2008). Beta-caryophyllene is a dietary cannabinoid. Proceedings of the National Academy of Sciences (PNAS), 105(26), 9099–9104. PMID: 18574142</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Bahi, A., et al. (2014). β-Caryophyllene, a CB2 receptor agonist produces multiple behavioral changes relevant to anxiety and depression in mice. Physiology & Behavior, 135, 119-124.</span></li>
           </ul>
        </div>

        <h3 className="text-2xl font-bold mb-6">Targeted Specimen Inventory</h3>
        <p className="text-lab-text mb-6">The following verified genetics from the Ocean Grown catalog express high concentrations of this terpene profile:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           
            <Link href="/genetics/jawa-pie" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-001</div>
               <div className="font-bold text-foreground group-hover:text-primary">JAWA PIE</div>
            </Link>
            <Link href="/genetics/alien-rift" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-003</div>
               <div className="font-bold text-foreground group-hover:text-primary">ALIEN RIFT</div>
            </Link>
            <Link href="/genetics/obi-wan-og" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-004</div>
               <div className="font-bold text-foreground group-hover:text-primary">OBI WAN OG</div>
            </Link>
            <Link href="/genetics/dark-plasma" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-005</div>
               <div className="font-bold text-foreground group-hover:text-primary">DARK PLASMA</div>
            </Link>
            <Link href="/genetics/dreadnought" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-007</div>
               <div className="font-bold text-foreground group-hover:text-primary">DREADNOUGHT</div>
            </Link>
            <Link href="/genetics/bear-mace" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-009</div>
               <div className="font-bold text-foreground group-hover:text-primary">BEAR MACE</div>
            </Link>
        </div>
      </div>
    </main>
  );
}
