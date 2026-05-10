"use client";

import { motion } from "framer-motion";
import { Droplet, Beaker, Leaf, ArrowRight, Activity, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-topo relative overflow-hidden">
      {/* HEADER */}
      <header className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center border-b border-lab-border bg-white/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Ocean Grown Seeds Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </div>
        <nav className="flex gap-8 text-sm font-medium text-lab-text">
          <a href="#" className="hover:text-primary transition-colors">GENETICS</a>
          <a href="#" className="hover:text-primary transition-colors">RESEARCH</a>
          <a href="#" className="hover:text-primary transition-colors">ARCHIVE</a>
        </nav>
        <div>
          <button className="flex items-center gap-2 text-xs font-mono bg-foreground text-background px-4 py-2 rounded uppercase tracking-widest hover:bg-primary transition-all">
            Access Database <ArrowRight size={14} />
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-accent/20 text-accent-dark">
                <Beaker size={16} />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-lab-text">
                Protocol: Hybridization
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05] text-foreground">
              Precision <br/>
              <span className="text-primary">Genetics.</span>
            </h1>

            <p className="text-lg text-lab-text mb-10 max-w-lg leading-relaxed">
              Highly hybridized, artisan-crafted cannabis genetics. Cultivated with strict laboratory standards to ensure optimal phenotypic expression and stability.
            </p>

            <div className="flex items-center gap-6">
              <button className="bg-primary text-white font-medium px-8 py-4 rounded-sm flex items-center gap-3 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
                View Specimen Files
                <ArrowRight size={18} />
              </button>
              <div className="font-mono text-xs text-lab-text uppercase tracking-widest flex flex-col">
                <span>Batch: <span className="text-foreground font-bold">OG-2026</span></span>
                <span>Status: <span className="text-accent-dark">Active</span></span>
              </div>
            </div>
          </motion.div>

          {/* HERO VISUAL (CLINICAL AESTHETIC) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full rounded-2xl bg-lab-bg border border-lab-border shadow-2xl flex flex-col justify-between p-8 overflow-hidden"
          >
            <div className="absolute inset-0 bg-topo opacity-50 mix-blend-multiply" />
            
            <div className="relative flex justify-between items-start">
              <div className="font-mono text-[10px] text-lab-text tracking-widest border border-lab-border px-3 py-1 rounded bg-white/80 backdrop-blur">
                ID: ALIEN-RIFT-01
              </div>
              <Activity className="text-accent" size={20} />
            </div>

            {/* Premium Macro Video Photography */}
            <div className="absolute inset-0 z-0 opacity-80 mix-blend-normal">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-lab-bg via-transparent to-lab-bg/50 mix-blend-hard-light" />
            </div>
            <div className="relative flex-1 flex items-center justify-center z-10"></div>

            <div className="relative grid grid-cols-3 gap-4 border-t border-lab-border pt-6">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-lab-text">Lineage</span>
                <span className="font-bold text-sm">Alien Abduction x Ocean Grown</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-lab-text">Flowering</span>
                <span className="font-bold text-sm">56-63 Days</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-lab-text">Yield</span>
                <span className="font-bold text-sm text-accent-dark">High / Vigorous</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RECENT BATCHES / STRAIN CARDS */}
      <section className="py-24 px-8 border-t border-lab-border bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Genetic Archive</h2>
              <p className="text-lab-text">Verified hybridization protocols.</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
              <Search size={16} /> Search Database
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {[
              { id: "OGS-001", name: "JAWA PIE", lineage: "Key Lime Pie x Alien Rift", type: "Indica Dominant" },
              { id: "OGS-002", name: "VADER OG", lineage: "Ocean Grown Kush x SFV OG", type: "Hybrid" },
              { id: "OGS-003", name: "NINJA FRUIT", lineage: "Grapefruit Haze x Grape Ape", type: "Sativa Dominant" }
            ].map((strain, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-lab-border bg-lab-bg rounded-lg p-6 hover:shadow-xl hover:border-accent/30 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-primary/5 rounded-bl-full -z-10 group-hover:to-primary/10 transition-all" />
                <div className="font-mono text-xs text-primary mb-4">{strain.id}</div>
                <h3 className="text-xl font-bold mb-1 tracking-tight">{strain.name}</h3>
                <p className="text-sm text-lab-text mb-6">Type: {strain.type}</p>
                <div className="pt-4 border-t border-lab-border/50">
                  <div className="font-mono text-[10px] text-lab-text uppercase mb-1">Lineage Cross</div>
                  <div className="font-medium text-sm">{strain.lineage}</div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
