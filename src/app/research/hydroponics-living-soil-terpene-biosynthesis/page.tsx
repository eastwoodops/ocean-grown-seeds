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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Hydroponics vs. Living Soil: Terpene Biosynthesis</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Analyzing the differing organoleptic expressions and biosynthetic pathways between inert substrates and organic webs.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>The debate between hydroponic cultivation and organic living soil extends beyond yield metrics; it fundamentally impacts the secondary metabolite profile of the plant. Hydroponic systems, using chelated synthetic nutrients and inert media (e.g., rockwool), offer unparalleled control over nutrient uptake, often resulting in explosive vegetative growth and maximum THC synthesis.</p>
    <p>On the other hand, living soil relies on a complex soil food web. Plant growth-promoting rhizobacteria (PGPR) and mycorrhizal fungi form symbiotic relationships with the root zone. Clinical studies suggest this biological stress and natural nutrient cycling trigger a broader array of defensive secondary metabolites, specifically, an expanded diversity of terpenoids and flavonoids. While hydroponics may maximize volume and potency, living soil frequently produces a more complex organoleptic (flavor and aroma) profile.</p>
          <p>We should also note the role of humic and fulvic acids within the living soil matrix. These complex organic molecules act as natural chelators, binding to micronutrients and greatly increasing their cellular permeability. This enhanced bioavailability, coupled with the constant micro-stresses applied by the competitive soil microbiome, forces the cannabis plant to deploy a wider array of defensive enzymes, ultimately resulting in a more robust and complex secondary metabolite profile than typically achieved in sterile hydroponic environments.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Bernstein, N., et al. (2019). Impact of N, P, K, and Humic Acid supplementation on the chemical profile of medical cannabis. Frontiers in Plant Science, 10, 736.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Pagnani, G., et al. (2018). Plant growth-promoting rhizobacteria (PGPR) in Cannabis sativa &apos;Finola&apos;. Industrial Crops and Products, 123, 159-164.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
