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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Post-Harvest Physiology: Curing and Volatile Compound Preservation</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">The science of moisture migration, chlorophyll degradation, and preventing monoterpene volatilization.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>A cultivar&apos;s genetic potential is fully realized not at harvest, but at the conclusion of a meticulous curing process. The post-harvest phase involves complex physiological changes that dramatically impact the smokeability and aroma of the final product.</p>
    <p>Immediately after harvest, the primary objective is to facilitate the slow degradation of chlorophyll and residual starches, which cause harsh, acrid smoke. This requires a controlled environment (typically 60°F and 60% relative humidity). If the drying process is too rapid, moisture evacuates the exterior of the flower, trapping chlorophyll inside. Crucially, monoterpenes (like myrcene and pinene) are highly volatile and begin to evaporate at temperatures as low as 68°F. Cold curing inside hermetically sealed glass environments prevents this volatilization, allowing internal moisture to evenly migrate to the exterior while preserving the fragile terpene profiles synthesized during the flowering cycle.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Jin, D., et al. (2019). Secondary Metabolites Profiled in Cannabis Inflorescences, Leaves, Stem Barks, and Roots for Medicinal Purposes. Scientific Reports, 9, 3309.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Chandra, S., et al. (2017). Cannabis sativa L.: Botany and Biotechnology. Springer.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
