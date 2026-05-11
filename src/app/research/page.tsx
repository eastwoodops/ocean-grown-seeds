"use client";
import Link from 'next/link';
import { Beaker, BookOpen, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ResearchIndex() {
  const articles = [
    { title: "Clinical Efficacy of β-Myrcene", slug: "clinical-efficacy-myrcene", desc: "Sedative, analgesic, and anti-inflammatory pathways evaluated in clinical literature." },
    { title: "β-Caryophyllene: The Dietary Cannabinoid", slug: "caryophyllene-dietary-cannabinoid", desc: "Examining CB2 receptor agonism and systemic anti-inflammatory responses." },
    { title: "D-Limonene: Anxiolytic Properties", slug: "limonene-anxiolytic-properties", desc: "Research highlighting the stress-relieving and mood-elevating mechanisms of Limonene." }
  ];

  return (
    <main className="min-h-screen bg-background relative pb-24">
      <header className="sticky top-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center border-b border-lab-border bg-white/80 backdrop-blur-md gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Ocean Grown Seeds Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-lab-text">
          <Link href="/genetics" className="hover:text-primary transition-colors pb-1">GENETICS</Link>
          <Link href="/research" className="text-primary border-b-2 border-primary pb-1">RESEARCH</Link>
          <Link href="#" className="hover:text-primary transition-colors pb-1">ARCHIVE</Link>
        </nav>
        <div className="hidden md:block w-24"></div>
      </header>

      <section className="pt-16 pb-12 px-4 md:px-8 border-b border-lab-border bg-topo">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-accent-dark mb-2">
            <BookOpen size={16} />
            <span className="font-mono text-xs uppercase tracking-widest">Clinical Research & Publications</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-2">Terpene Efficacy Lab.</h1>
          <p className="mt-4 max-w-2xl text-lab-text text-lg">Peer-reviewed clinical evaluations of specific terpene isolates and their corresponding genetic pathways within the Ocean Grown catalog.</p>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map(art => (
          <Link key={art.slug} href={`/research/${art.slug}`} className="block group">
            <div className="border border-lab-border bg-white p-6 rounded-xl h-full flex flex-col hover:border-primary hover:shadow-xl transition-all">
               <Beaker className="text-primary mb-4" size={24} />
               <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{art.title}</h3>
               <p className="text-lab-text text-sm mb-6 flex-1">{art.desc}</p>
               <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-dark uppercase tracking-widest">
                 Read Publication <ArrowRight size={14} />
               </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
