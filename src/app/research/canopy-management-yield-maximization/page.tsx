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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Canopy Management: Crop Steering and Yield Maximization</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Techniques for manipulating apical dominance to increase total biomass and floral density.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>Maximizing cannabis yield requires understanding and manipulating the plant&apos;s natural architecture. Left untrained, cannabis expresses strong apical dominance, directing auxin (a growth hormone) to a single main kola. Canopy management techniques systematically break this dominance to distribute energy evenly across multiple floral sites.</p>
    <p>High-Stress Training (HST) techniques like topping and super-cropping purposefully damage the main stem, temporarily stunting upward growth while lower lateral branches catch up. Low-Stress Training (LST), utilizing trellising (the Screen of Green or &quot;ScrOG&quot; method), bends branches horizontally without structural damage. Combined with strategic defoliation to increase photon penetration into the lower canopy, these crop steering methodologies ensure uniform light distribution and significantly higher total harvest weights.</p>
          <p>Advancements in precision agriculture have further refined canopy management through the use of localized microclimate sensors. By monitoring the Vapor Pressure Deficit (VPD) at different strata within the canopy, cultivators can precisely tailor their defoliation schedules to optimize transpiration rates. Removing specific fan leaves not only increases light penetration but also prevents micro-pockets of stagnant, humid air, thereby mitigating the risk of powdery mildew and ensuring consistent metabolic rates across all floral sites.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Zheng, Y. (2022). Handbook of Cannabis Production in Controlled Environments. CRC Press.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Moher, M., et al. (2022). The effect of defoliation on yield and quality of Cannabis sativa. Frontiers in Plant Science, 13, 1063276.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
