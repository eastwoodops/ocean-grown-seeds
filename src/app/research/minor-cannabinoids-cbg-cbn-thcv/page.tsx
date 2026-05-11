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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Beyond THC: The Therapeutic Potential of Minor Cannabinoids</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Analyzing the biosynthetic pathways and physiological effects of CBG, CBN, and THCV.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>While Delta-9-THC and CBD dominate mainstream cannabis science, the plant produces over 100 minor cannabinoids that exhibit major physiological effects. As breeding programs advance, isolating these minor compounds has become a main objective.</p>
    <p><strong>Cannabigerol (CBG):</strong> Known as the &quot;mother cannabinoid,&quot; CBGA is the chemical precursor to THCA, CBDA, and CBCA. Strains harvested early or bred to halt synthesis at the CBG stage offer potent antibacterial and neuroprotective properties without intoxication. <br/><br/><strong>Cannabinol (CBN):</strong> A degradation product of oxidized THC, CBN acts as a powerful sedative and is frequently used to treat severe insomnia. <br/><br/><strong>Tetrahydrocannabivarin (THCV):</strong> A homolog of THC, THCV acts as a CB1 receptor antagonist at low doses, effectively suppressing appetite and stabilizing blood sugar, a striking contrast to the appetite-stimulating effects of standard THC.</p>
          <p>The biosynthesis of these minor cannabinoids is heavily dictated by harvesting timelines and enzymatic expression. For instance, allowing a plant to mature significantly past its peak flowering window promotes the oxidative degradation of THC into CBN. On the other hand, breeding for THCV requires selecting landrace genetics (often originating from equatorial regions like Southern Africa) that naturally produce geranyl pyrophosphate alongside divarinolic acid. Understanding these enzymatic pathways allows breeders to custom-tailor cannabinoid profiles for highly specific therapeutic applications.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Navarro, G., et al. (2018). Pharmacological data of cannabigerol and its derivatives. Frontiers in Pharmacology, 9, 622.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>McPartland, J. M., et al. (2015). Are cannabidiol and Δ9-tetrahydrocannabivarin negative modulators of the endocannabinoid system? British Journal of Pharmacology, 172(3), 737-753.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
