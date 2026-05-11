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
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-foreground">Light Deprivation: Manipulating Photoperiods</h1>
        <p className="text-xl text-lab-text mb-12 leading-relaxed">The pros, cons, and physiological impacts of artificially inducing flowering cycles in greenhouse environments.</p>
        
        <div className="prose prose-lg max-w-none text-foreground/80 mb-16 space-y-6">
          <p>Light deprivation (&quot;light dep&quot;) is a cultivation technique used in greenhouses to artificially reduce the daily photoperiod to 12 hours or less, triggering the cannabis plant&apos;s natural flowering response during the peak of summer.</p>
    <p><strong>Pros:</strong> This technique allows for multiple harvests per year using the power of the sun, drastically reducing the electrical overhead associated with indoor growing. It also enables cultivators to bring fresh product to market before the traditional fall &quot;Croptober&quot; glut.</p>
    <p><strong>Cons:</strong> Implementing automated blackout curtains requires significant capital expenditure. Furthermore, the abrupt manipulation of light cycles, combined with the heat trapped by blackout tarps, can induce abiotic stress. If humidity and airflow are not meticulously managed, this stress can lead to micro-climates conducive to Botrytis (bud rot) or trigger hermaphroditic responses in unstable genetics.</p>
          <p>Beyond simple timing, advanced light deprivation strategies now incorporate precise Daily Light Integral (DLI) management and far-red light supplementation. By exposing plants to brief periods of 730nm far-red light immediately before the blackout curtains close, cultivators can rapidly trigger the phytochrome state change (from Pfr to Pr), accelerating the onset of flowering and potentially shaving days off the overall maturation cycle, further increasing the economic efficiency of the greenhouse.</p>
        </div>
        
        <div className="bg-topo border border-lab-border p-6 rounded-xl mb-12">
           <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest mb-4"><FlaskConical size={16}/> Clinical Citations & References</h3>
           <ul className="space-y-3 text-sm text-lab-text">
             <li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Potter, D. J. (2014). A review of the cultivation and processing of cannabis for forensic and medical purposes. Drug Testing and Analysis, 6(1-2), 34-38.</span></li><li className="flex items-start gap-2"><Link2 size={14} className="mt-1 flex-shrink-0"/> <span>Zheng, Y., et al. (2020). Photoperiodic requirements for flowering in modern cannabis cultivars. Frontiers in Plant Science, 11.</span></li>
           </ul>
        </div>
      </div>
    </main>
  );
}
