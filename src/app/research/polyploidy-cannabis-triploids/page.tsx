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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Polyploidy in Cannabis: Triploids and Yield</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Exploring the induction of multiple chromosome sets to increase biomass, resin production, and genetic stability.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>Natural cannabis is a diploid species, meaning it possesses two sets of chromosomes. Polyploidy is the condition of possessing more than two complete sets of chromosomes. In agricultural science, inducing polyploidy (often via mitotic inhibitors like colchicine or oryzalin) is a proven method to increase plant vigor and yield.</p>
    <p>Tetraploids (four sets) are often used as breeding stock. When a tetraploid is crossed with a standard diploid, the resulting offspring is a triploid (three sets). Triploid cannabis plants are virtually sterile, meaning they produce no seeds even in the presence of male pollen. This sterility forces the plant to redirect all metabolic energy into flower and resin production rather than seed development. Studies have shown that polyploid cannabis exhibits larger stomata, thicker leaves, and a noticeable increase in terpene and cannabinoid biosynthesis.</p>
          <p>The commercial viability of triploid cannabis is currently driving a major paradigm shift in large-scale agronomy. Because triploids cannot produce seeds even if cross-pollinated by rogue hemp fields or hermaphroditic neighbors, they offer an unparalleled level of crop insurance for outdoor farmers. In fact, the increased cellular volume inherent to polyploids often results in a higher density of glandular trichomes per square centimeter, effectively raising the ceiling on total extractable cannabinoid yield.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Parsons, J. L., et al. (2019). Polyploidization for the genetic improvement of Cannabis sativa. Frontiers in Plant Science, 10, 476.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Mansouri, H., & Bagheri, M. (2017). Induction of polyploidy and its effect on Cannabis sativa L. Caryologia, 70(4), 427-432.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
