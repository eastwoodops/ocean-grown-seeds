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
  "headline": "Abiotic Stress Elicitation: Maximizing Cannabinoid Synthesis",
  "description": "How calculated environmental stressors trigger defensive THC and terpene production.",
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
    "@id": "https://www.oceangrownseeds.com/research/abiotic-stress-maximizing-thc"
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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Abiotic Stress Elicitation: Maximizing Cannabinoid Synthesis</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">How calculated environmental stressors trigger defensive THC and terpene production.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>Cannabinoids (like THC and CBD) and terpenoids are secondary metabolites. Unlike primary metabolites, which are essential for basic growth and reproduction, secondary metabolites are synthesized primarily as defense mechanisms against environmental hazards, predators, and pathogens.</p>
    <p>Cultivators can exploit this biological imperative through &quot;abiotic stress elicitation.&quot; For instance, introducing controlled drought stress during the late flowering stage signals an impending threat to the plant, causing it to dramatically increase resin production in a final attempt to protect its reproductive organs (flowers). Similarly, controlled exposure to UV-B radiation forces the plant to produce higher concentrations of THC, which acts as a molecular sunscreen for the plant&apos;s cellular structures. When executed perfectly, these controlled stressors maximize a cultivar&apos;s genetic potential for potency.</p>
          <p>Temperature manipulation is another very useful abiotic stressor. Introducing a calculated drop in ambient temperature (often 10-15 degrees Fahrenheit) during the final weeks of flowering mimics the onset of autumn. This thermal stress degrades chlorophyll, allowing underlying anthocyanin pigments to express vibrant purple and red hues, while simultaneously increasing the viscosity of the resin glands. This targeted cold stress halts the volatilization of delicate monoterpenes, resulting in a more pungent and visually striking final product.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Caplan, D., et al. (2019). Drought stress to maximize secondary metabolite production in Cannabis sativa L. HortScience, 54(5), 903-909.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Lydon, J., et al. (1987). UV-B radiation effects on photosynthesis, growth and cannabinoid production of two Cannabis sativa chemotypes. Photochemistry and Photobiology, 46(2), 201-206.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
