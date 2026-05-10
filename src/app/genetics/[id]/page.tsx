"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Beaker, Activity, ShieldCheck, Dna, Leaf, Droplet, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { STRAIN_DB } from "@/lib/strains";

export default function StrainDetail({ params }: { params: { id: string } }) {
  const strain = STRAIN_DB.find(s => s.slug === params.id) || STRAIN_DB[0];

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pb-24">
      {/* HEADER */}
      <header className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center border-b border-lab-border bg-white/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Ocean Grown Seeds Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </Link>
        <nav className="flex gap-8 text-sm font-medium text-lab-text">
          <Link href="/genetics" className="text-primary border-b-2 border-primary pb-1">GENETICS</Link>
          <a href="#" className="hover:text-primary transition-colors pb-1">RESEARCH</a>
          <a href="#" className="hover:text-primary transition-colors pb-1">ARCHIVE</a>
        </nav>
        <div>
          <button className="flex items-center gap-2 text-xs font-mono bg-lab-bg border border-lab-border text-foreground px-4 py-2 rounded uppercase tracking-widest hover:bg-lab-border transition-all shadow-sm">
            Login <ArrowRight size={14} />
          </button>
        </div>
      </header>

      {/* TOPOGRAPHY BACKGROUND */}
      <div className="absolute inset-0 bg-topo opacity-30 z-0 pointer-events-none" />

      {/* BREADCRUMBS & NAV */}
      <div className="pt-32 px-8 max-w-7xl mx-auto relative z-10">
        <Link href="/genetics" className="inline-flex items-center gap-2 text-xs font-mono text-lab-text hover:text-primary transition-colors mb-8">
          <ArrowLeft size={14} /> BACK TO DATABASE
        </Link>
      </div>

      {/* MAIN SPECIMEN LAYOUT */}
      <div className="px-8 max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: VISUALS */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Main Image Container */}
          <div className="relative aspect-square w-full bg-lab-bg rounded-xl border border-lab-border shadow-2xl overflow-hidden group">
            <div className="absolute top-4 left-4 z-20">
               <div className="font-mono text-xs text-primary bg-white/90 backdrop-blur-md px-3 py-1.5 rounded border border-primary/20 shadow-sm flex items-center gap-2">
                 <ShieldCheck size={14} /> VERIFIED GENETICS
               </div>
            </div>
            <Image 
              src={strain.image} 
              alt={strain.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* HUD Overlay */}
            <div className="absolute inset-0 border-[1px] border-white/10 z-10 pointer-events-none m-4 rounded" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
                <div className="w-[80%] h-[80%] border border-accent/30 rounded-full flex items-center justify-center">
                   <div className="w-[90%] h-[90%] border border-accent/20 rounded-full border-dashed" />
                </div>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="relative aspect-square bg-lab-bg border border-lab-border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-colors opacity-70 hover:opacity-100">
                 <Image src={strain.image} alt="Thumbnail" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: LAB DATA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="lg:col-span-7 flex flex-col"
        >
          {/* Specimen Header */}
          <div className="mb-8 border-b border-lab-border pb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-lab-text uppercase tracking-widest bg-lab-bg border border-lab-border px-2 py-0.5 rounded">ID: {strain.id}</span>
              <span className={`font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border ${strain.status === 'Active' ? 'bg-accent/10 border-accent/20 text-accent-dark' : 'bg-lab-bg border-lab-border text-lab-text'}`}>
                Status: {strain.status}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-4">{strain.name}</h1>
            <p className="text-lg text-lab-text leading-relaxed">{strain.description}</p>
          </div>

          {/* Genetic Lineage Visualizer */}
          <div className="mb-10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-lab-text mb-4 flex items-center gap-2">
              <Dna size={16} /> Hybridization Lineage
            </h3>
            <div className="bg-lab-bg border border-lab-border rounded-xl p-6 relative overflow-hidden">
               <div className="absolute right-0 top-0 opacity-5">
                 <Dna size={120} />
               </div>
               <div className="flex items-center justify-between relative z-10">
                 {/* Mother */}
                 <div className="flex-1 text-center">
                    <div className="font-mono text-[10px] uppercase text-lab-text mb-2 text-rose-500">Seed Donor (♀)</div>
                    <div className="font-bold text-lg bg-white border border-lab-border py-3 px-4 rounded shadow-sm">{strain.mother}</div>
                 </div>
                 {/* Cross */}
                 <div className="px-6 flex flex-col items-center justify-center text-lab-text">
                    <span className="font-mono text-xl font-light">X</span>
                    <div className="w-full h-px bg-lab-border mt-2" />
                 </div>
                 {/* Father */}
                 <div className="flex-1 text-center">
                    <div className="font-mono text-[10px] uppercase text-lab-text mb-2 text-blue-500">Pollen Donor (♂)</div>
                    <div className="font-bold text-lg bg-white border border-lab-border py-3 px-4 rounded shadow-sm">{strain.father}</div>
                 </div>
               </div>
            </div>
          </div>

          {/* Lab Metrics Grid */}
          <h3 className="font-mono text-xs uppercase tracking-widest text-lab-text mb-4 flex items-center gap-2">
            <Activity size={16} /> Verified Lab Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white border border-lab-border p-4 rounded-lg shadow-sm">
              <div className="font-mono text-[10px] uppercase text-lab-text mb-1 flex items-center gap-1"><Sprout size={12}/> Type</div>
              <div className="font-bold text-sm">{strain.type}</div>
            </div>
            <div className="bg-white border border-lab-border p-4 rounded-lg shadow-sm border-l-4 border-l-primary">
              <div className="font-mono text-[10px] uppercase text-lab-text mb-1 flex items-center gap-1"><Activity size={12}/> THC Range</div>
              <div className="font-bold text-sm text-primary">{strain.thc}</div>
            </div>
            <div className="bg-white border border-lab-border p-4 rounded-lg shadow-sm">
              <div className="font-mono text-[10px] uppercase text-lab-text mb-1 flex items-center gap-1"><Droplet size={12}/> Yield</div>
              <div className="font-bold text-sm">{strain.yield}</div>
            </div>
            <div className="bg-white border border-lab-border p-4 rounded-lg shadow-sm">
              <div className="font-mono text-[10px] uppercase text-lab-text mb-1 flex items-center gap-1"><Beaker size={12}/> Flowering</div>
              <div className="font-bold text-sm">{strain.flow}</div>
            </div>
          </div>

          {/* Terpene Profile */}
          <div className="bg-foreground text-background rounded-xl p-6 shadow-xl mb-10 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 opacity-10">
               <Leaf size={100} />
            </div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-lab-bg mb-4 flex items-center gap-2">
              <Leaf size={16} /> Organoleptic Profile
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div>
                <div className="font-mono text-[10px] uppercase text-lab-text mb-1">Primary Terpenes</div>
                <div className="font-bold">{strain.terpenes}</div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase text-lab-text mb-1">Aroma & Flavor</div>
                <div className="font-bold text-accent">{strain.aroma}</div>
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="flex gap-4">
            <button className="flex-1 bg-primary text-white font-medium py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
              Acquire Specimen Pack
              <ArrowRight size={18} />
            </button>
            <button className="px-8 bg-white border border-lab-border text-foreground font-medium py-4 rounded-sm hover:bg-lab-bg transition-all">
              View Grow Logs
            </button>
          </div>

        </motion.div>

      </div>
    </main>
  );
}

