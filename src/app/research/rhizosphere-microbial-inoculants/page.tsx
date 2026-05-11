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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">The Rhizosphere: Mycorrhizal Networks and Microorganisms</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Leveraging plant growth-promoting rhizobacteria (PGPR) and fungi for nutrient bioavailability.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>The rhizosphere—the narrow region of soil directly influenced by root secretions—is the literal engine of an organic cannabis garden. Rather than feeding the plant directly with synthetic salts, advanced organic cultivators feed the soil food web.</p>
    <p>Inoculating the root zone with Arbuscular Mycorrhizal Fungi (AMF) creates a symbiotic network that effectively extends the plant&apos;s root mass, unlocking phosphorus and micronutrients that would otherwise be insoluble. Simultaneously, Plant Growth-Promoting Rhizobacteria (PGPR) colonize the roots, fixing atmospheric nitrogen and producing natural phytohormones that stimulate robust root development. Clinical evaluations confirm that crops grown with rich microbial inoculants express enhanced resistance to vascular diseases (like Fusarium) and produce a broader, more complex terpene profile due to the organic nutrient cycling process.</p>
          <p>To sustain these microbial populations, cultivators must actively manage the soil&apos;s carbon-to-nitrogen ratio and provide consistent organic inputs, such as humic acid and kelp extracts. These amendments serve as complex carbohydrates—essentially food for the microbes. As the microorganisms digest these inputs, they excrete bioavailable nutrients and highly specific enzymes directly into the rhizosphere, creating a dynamic, self-regulating ecosystem that buffers against pH fluctuations and nutrient lockout.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Pagnani, G., et al. (2018). Plant growth-promoting rhizobacteria (PGPR) in Cannabis sativa &apos;Finola&apos;. Industrial Crops and Products, 123, 159-164.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Lyu, D., et al. (2019). Plant Growth-Promoting Rhizobacteria for Cannabis Production: Yield and Profile. Frontiers in Microbiology, 10, 1761.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
