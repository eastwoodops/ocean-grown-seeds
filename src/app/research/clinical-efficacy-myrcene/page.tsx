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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Clinical Efficacy of β-Myrcene</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Evaluating the analgesic, anti-inflammatory, and sedative pathways of the cannabis plant&apos;s most prevalent monoterpene.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>β-Myrcene is a prominent monoterpene commonly found in hops, lemongrass, mangoes, and a significant portion of modern cannabis cultivars. In clinical evaluations, myrcene has demonstrated potent pharmacological pathways, specifically concerning analgesia and sedation.</p>
     <p>According to research highlighted in the <em>Frontiers in Nutrition</em> (Surendran et al., 2021), myrcene functions as a potent anti-inflammatory and catabolic agent, suggesting significant therapeutic potential in the management of osteoarthritis and systemic inflammation. Furthermore, Dr. Ethan Russo&apos;s landmark 2011 study on the &quot;entourage effect&quot; indicated that myrcene reduces resistance across the blood-brain barrier, thereby accelerating the onset of other cannabinoids like THC and heavily promoting the &quot;couch-lock&quot; sedative effect associated with broad-leaf (Indica) phenotypes.</p>
     <p>Our hybridization protocols selectively breed for myrcene dominance in cultivars targeted at insomnia, chronic pain, and acute stress relief.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Surendran, S., et al. (2021). Myrcene: What Are the Potential Health Benefits of This Flavouring and Aroma Agent? Frontiers in Nutrition, 8, 699666. PMID: 34350208</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Russo, E. B. (2011). Taming THC: potential cannabis synergy and phytocannabinoid-terpenoid entourage effects. British Journal of Pharmacology, 163(7), 1344–1364.</span></li>
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
            <Link href="/genetics/alien-rift" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-003</div>
               <div className="font-bold text-foreground group-hover:text-primary">ALIEN RIFT</div>
            </Link>
            <Link href="/genetics/dark-plasma" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-005</div>
               <div className="font-bold text-foreground group-hover:text-primary">DARK PLASMA</div>
            </Link>
            <Link href="/genetics/yoda-soda" className="block p-4 border border-lab-border rounded bg-white hover:border-primary transition-colors">
               <div className="font-mono text-[10px] text-lab-text uppercase mb-1">ID: OGS-008</div>
               <div className="font-bold text-foreground group-hover:text-primary">YODA SODA</div>
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
