"use client";
import Link from 'next/link';
import { ArrowLeft, FlaskConical, Link2 } from 'lucide-react';
import Image from 'next/image';

export default function Article() {
  return (
    <main className="min-h-screen bg-background relative pb-24">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Epigenetics: Environmental Influence on Phenotypic Expression",
  "description": "How temperature, lighting, and stress alter gene expression without changing the underlying DNA sequence.",
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
    "@id": "https://www.oceangrownseeds.com/research/epigenetics-cannabis-phenotypes"
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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Epigenetics: Environmental Influence on Phenotypic Expression</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">How temperature, lighting, and stress alter gene expression without changing the underlying DNA sequence.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>Epigenetics refers to heritable changes in gene expression that do not involve alterations to the underlying DNA sequence. In Cannabis sativa, epigenetic mechanisms, primarily DNA methylation and histone modification, play a crucial role in how a cultivar responds to its environment.</p>
    <p>When a clone is placed in an environment with high UV-B radiation or significant temperature fluctuations, it can express greatly different cannabinoid ratios and anthocyanin (purple pigmentation) production compared to its genetic identical grown in standard conditions. This phenotypic plasticity allows the plant to adapt to abiotic stress. Research indicates that these stress-induced epigenetic markers can sometimes be passed down to the next generation, a vital consideration for breeders stabilizing traits in diverse climates.</p>
          <p>The implications of these epigenetic shifts are major for commercial cultivation. A phenomenon known as &apos;clonal degradation&apos; or &apos;phenotypic drift&apos; can occur when mother plants are kept in suboptimal conditions for extended periods. Over time, the accumulation of stress-induced DNA methylation can cause the clones to slowly lose their vigor and original terpene profiles, necessitating the use of tissue culture to strip these epigenetic markers and restore the cultivar to its true genetic baseline.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Kovalchuk, I., et al. (2020). Epigenetic Regulation of Cannabis sativa. Plant Science, 298, 110562.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Vergara, D., et al. (2016). Phytocannabinoid diversity: a consequence of environmental and genetic interactions. Frontiers in Plant Science, 7, 1632.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
