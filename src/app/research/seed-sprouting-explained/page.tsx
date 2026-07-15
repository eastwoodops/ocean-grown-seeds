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
  "headline": "Seed Sprouting Explained",
  "description": "A step-by-step tutorial on seed germination, early root-zone establishment, and the biological stages of sprouting cannabis seeds.",
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
    "@id": "https://www.oceangrownseeds.com/research/seed-sprouting-explained"
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
          <Link href="/archive" className="hover:text-primary transition-colors pb-1">ARCHIVE</Link>
        </nav>
        <div className="hidden md:block w-24"></div>
      </header>

      <div className="pt-8 px-4 md:px-8 max-w-4xl mx-auto">
        <Link href="/research" className="inline-flex items-center gap-2 text-xs font-mono text-lab-text hover:text-primary transition-colors mb-8">
          <ArrowLeft size={14} /> BACK TO PUBLICATIONS
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Seed Sprouting Explained</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">A step-by-step tutorial on seed germination, early root-zone establishment, and the biological stages of sprouting cannabis seeds.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>A cannabis seed lies dormant, waiting for the necessary requirements to start a new life. The radicle will become the root, cotyledons will become the first leaves to appear, and the shoot apex nestled between the cotyledons will become the very top of the growing plant.</p>
<p>Waiting to fuel the process is the desiccated endosperm, full of carbohydrates, proteins, and fats, ready to fuel explosive growth. The tough outer-coat of the seed protects it until the conditions are ideal.</p>
<p>The first step is <strong>imbibition</strong>, whereby water will be absorbed by the dry seed. When the seed has absorbed a sufficient amount of water, enzymes will re-hydrate and become active. The active enzymes will begin to break down food stored in the endosperm, catalyzing the development of the embryo.</p>
<p>This type of metabolism is called <em>aerobic respiration</em>. Oxygen is required in this metabolic process. As the seed embryo consumes the food stored in the endosperm, it will take in oxygen and release carbon dioxide. Without access to oxygen, the seed will lack the necessary inputs to create energy and will fail to thrive.</p>
<p>The root emerges and seeks nutrients. As the stored food is used up, the root seeks out additional nutrients from the surrounding medium, developing the rhizosphere.</p>
<p>As the cotyledons begin to emerge and push the seed coat off, the apex opens up and the first true leaves emerge. Photosynthesis now provides the energy for the growing plants.</p>
<h3 className="text-2xl font-bold mt-8 mb-4">How to Sprout Cannabis Seeds</h3>
<p>To sprout cannabis seeds, follow these steps:</p>
<ol className="list-decimal pl-6 space-y-2 mb-6">
  <li>Soak in deionized water for 24-48 hours.</li>
  <li>Place in a damp paper towel for 24-48 hours.</li>
  <li>Transplant to a moist medium, being careful to keep the medium wet but not flooded.</li>
</ol>
<p>As the seedlings emerge they will need the following to thrive:</p>
<ul className="list-disc pl-6 space-y-2 mb-6">
  <li>A light nutrient solution (70%) or &apos;starting-strength&apos; grow media</li>
  <li>Low-intensity lighting (T5 or shaded sun)</li>
  <li>Mild temperatures (65-72&deg;F)</li>
  <li>Consistent moisture (relative humidity)</li>
  <li>A slight breeze (air movement)</li>
</ul>
<h3 className="text-2xl font-bold mt-8 mb-4">Maintaining Ideal Conditions</h3>
<p>Determining when to move a seedling from water to paper towel to medium is a challenge for new growers. When a seed shows a tap root it is ready to move to a paper towel. When some of the seeds begin to show their leaves it is time to move to medium.</p>
<p>Maintaining ideal conditions becomes the next challenge. The light source can be too intense and burn seedlings, it can be too far away and seedlings can stretch. The medium can be too dry causing the seedlings to wither, the medium can soak and cause the roots to drown and rot without oxygen. Nutrients can be too strong or too weak. The temperatures can be too hot or too cold. If air circulation is lacking, the seedlings will choke off their own respiration cycles.</p>
<p>Building and maintaining a proper environment consistently is a challenge, but it will give your seedlings the best possible start.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Valkyrie. (n.d.). Seed Sprouting Explained. Ocean Grown Seeds Archive.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
