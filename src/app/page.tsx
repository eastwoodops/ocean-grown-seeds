"use client";
import { motion } from "framer-motion";
import { Droplet, Beaker, Leaf, ArrowRight, Activity, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { STRAIN_DB } from "@/lib/strains";

export default function Home() {
  // Homepage requested strains: Alien Rift, Vader OG, Jawa Pie
  const featuredStrains = STRAIN_DB.filter(s => 
    ['alien-rift', 'vader-og', 'jawa-pie'].includes(s.slug)
  );

  return (
    <main className="min-h-screen bg-topo relative overflow-hidden">
      {/* HEADER */}
      <header className="absolute top-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center border-b border-lab-border bg-white/50 backdrop-blur-md gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Ocean Grown Seeds Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-lab-text">
          <Link href="/genetics" className="hover:text-primary transition-colors">GENETICS</Link>
          <Link href="/genetics" className="hover:text-primary transition-colors">RESEARCH</Link>
          <Link href="/genetics" className="hover:text-primary transition-colors">ARCHIVE</Link>
        </nav>
        <div>
          <Link href="/genetics" className="flex items-center gap-2 text-xs font-mono bg-foreground text-background px-4 py-2 rounded uppercase tracking-widest hover:bg-primary transition-all">
            Access Database <ArrowRight size={14} />
          </Link>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
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

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05] text-foreground">
              Precision <br/>
              <span className="text-primary">Genetics.</span>
            </h1>

            <p className="text-base md:text-lg text-lab-text mb-10 max-w-lg leading-relaxed">
              Highly hybridized, artisan-crafted cannabis genetics. Cultivated with strict laboratory standards to ensure optimal phenotypic expression and stability.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link href="/genetics" className="bg-primary text-white font-medium px-8 py-4 rounded-sm flex items-center justify-center gap-3 hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 w-full sm:w-auto">
                View Specimen Files
                <ArrowRight size={18} />
              </Link>
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
            className="relative h-[400px] md:h-[600px] w-full rounded-2xl bg-lab-bg border border-lab-border shadow-2xl flex flex-col justify-between p-4 md:p-8 overflow-hidden"
          >
            <div className="absolute inset-0 z-0 opacity-80 mix-blend-normal">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-lab-bg via-transparent to-lab-bg/50 mix-blend-hard-light" />
            </div>
            
            <div className="relative flex justify-between items-start z-10">
              <div className="font-mono text-[10px] text-lab-text tracking-widest border border-lab-border px-3 py-1 rounded bg-white/80 backdrop-blur">
                ID: ALIEN-RIFT-01
              </div>
              <Activity className="text-accent" size={20} />
            </div>

            <div className="relative flex-1 flex items-center justify-center z-10"></div>

            <div className="relative grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 border-t border-lab-border/50 pt-4 md:pt-6 z-10 bg-white/60 backdrop-blur-sm p-4 rounded-xl">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-lab-text">Lineage</span>
                <span className="font-bold text-xs md:text-sm">Alien Abduction x Ocean Grown</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase text-lab-text">Flowering</span>
                <span className="font-bold text-xs md:text-sm">56-63 Days</span>
              </div>
              <div className="flex flex-col col-span-2 md:col-span-1 mt-2 md:mt-0">
                <span className="font-mono text-[10px] uppercase text-lab-text">Yield</span>
                <span className="font-bold text-xs md:text-sm text-accent-dark">High / Vigorous</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RECENT BATCHES / STRAIN CARDS */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-t border-lab-border bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Genetic Archive</h2>
              <p className="text-lab-text">Verified hybridization protocols.</p>
            </div>
            <Link href="/genetics" className="flex items-center justify-center w-full md:w-auto gap-2 text-sm font-medium border border-lab-border px-4 py-2 rounded-md hover:border-primary hover:text-primary transition-colors">
              <Search size={16} /> Search Database
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredStrains.map((strain, i) => (
              <Link key={strain.id} href={`/genetics/${strain.slug}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group border border-lab-border bg-white rounded-xl overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all cursor-pointer relative flex flex-col h-full"
                >
                  <div className="relative h-48 w-full bg-lab-bg border-b border-lab-border overflow-hidden">
                    <Image src={strain.image} alt={strain.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div>
                        <div className="font-mono text-xs text-accent bg-black/40 backdrop-blur-md px-2 py-1 rounded inline-block mb-1 border border-white/10 shadow-lg">
                          {strain.id}
                        </div>
                        <h3 className="text-xl font-black tracking-tight text-white drop-shadow-md">{strain.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="pt-2">
                      <div className="font-mono text-[10px] text-lab-text uppercase mb-1">Lineage Cross</div>
                      <div className="font-medium text-sm text-foreground">{strain.lineage}</div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
