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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Autoflowering Genetics: Cannabis Ruderalis</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">The evolutionary adaptation of day-neutral traits and their integration into modern high-THC hybrids.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>Standard Cannabis sativa and indica are photoperiodic, requiring a reduction in daylight hours (approaching 12/12) to transition from vegetative growth to flowering. Cannabis ruderalis, a subspecies native to the harsh, short-summer climates of Central Asia and Russia, evolved a different survival strategy: autoflowering.</p>
    <p>Ruderalis plants are &quot;day-neutral,&quot; meaning they flower based on chronological age (usually 3-4 weeks from germination) rather than light cycles. While pure ruderalis is small and lacks significant cannabinoid content, breeders have successfully integrated the recessive autoflowering allele into elite photoperiod strains. Today&apos;s advanced autoflowers can finish a complete lifecycle in 70 days under 24 hours of light, producing yields and potencies that rival traditional photoperiod cultivars.</p>
          <p>The genetic mapping of the autoflowering trait has revealed it to be governed by a single recessive allele. This means that crossing a pure photoperiod plant with an autoflower results in an F1 generation that is 100% photoperiodic, but carries the hidden autoflower gene. Breeders must cross these F1 siblings to create an F2 generation, where exactly 25% of the offspring will express the day-neutral trait. Subsequent generations of backcrossing are required to stabilize the high THC and terpene profiles while locking in the autoflowering mechanism.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>McPartland, J. M. (2018). Cannabis systematics at the levels of family, genus, and species. Cannabis and Cannabinoid Research, 3(1), 203-212.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Chouvy, P. A. (2015). History of Cannabis. In: Handbook of Cannabis.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
