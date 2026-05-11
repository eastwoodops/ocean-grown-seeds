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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Mendelian Genetics: Unlocking Recessive Traits</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">Understanding Punnett squares, homozygous alleles, and the isolation of hidden genetic markers in F2 generations.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>Mendelian inheritance models form the bedrock of cannabis hybridization. While F1 (first generation) crosses often display immense vigor and uniform dominance, breeders seeking unique or rare traits must often look to the F2 generation and beyond.</p>
    <p>Recessive traits&mdash;such as specific leaf mutations, autoflowering characteristics, or unique minor cannabinoid profiles (like THCV or CBDV)&mdash;are frequently masked by dominant alleles in an F1 hybrid. By crossing two F1 siblings to create an F2 generation, the alleles recombine, allowing recessive traits to visibly express in approximately 25% of the population. Isolating these homozygous recessive plants is the crucial first step in breeding entirely new, stable phenotypic lines.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Clarke, R. C. (1981). Marijuana Botany: An Advanced Study. Ronin Publishing.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>de Meijer, E. P., et al. (2003). The inheritance of chemical phenotype in Cannabis sativa L. Genetics, 163(1), 335-346.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
