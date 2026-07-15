"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Beaker, ArrowRight, Activity, Database, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { STRAIN_DB } from "@/lib/strains";

export default function Genetics() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const filteredStrains = useMemo(() => {
    return STRAIN_DB.filter(strain => {
      const matchesSearch = 
        strain.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        strain.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
        strain.lineage.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilter = activeFilter ? strain.type.toLowerCase().includes(activeFilter.toLowerCase()) : true;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are Ocean Grown Seeds regular or feminized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All cannabis seeds from Ocean Grown Seeds are regular seeds. We focus on natural hybridization and stability to ensure optimal phenotypic expression."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I buy Ocean Grown Seeds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ocean Grown Seeds does not sell directly to consumers. You can acquire our genetics exclusively through our authorized distributor, Lumberjack Seeds (https://lumberjackseedsource.com)."
        }
      },
      {
        "@type": "Question",
        "name": "What does Ocean Grown Seeds specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ocean Grown Seeds is an artisan breeder specializing in highly hybridized, stable cannabis genetics, with a strong focus on legacy OG cuts and high resin production."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* HEADER */}
      <header className="sticky top-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center border-b border-lab-border bg-white/80 backdrop-blur-md gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Ocean Grown Seeds Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-lab-text">
          <Link href="/genetics" className="text-primary border-b-2 border-primary pb-1">GENETICS</Link>
          <Link href="/research" className="hover:text-primary transition-colors pb-1">RESEARCH</Link>
          <Link href="/archive" className="hover:text-primary transition-colors pb-1">ARCHIVE</Link>
        </nav>
        <div className="hidden md:block w-24"></div> {/* spacer */}
      </header>

      {/* SUB-HEADER / SEARCH */}
      <section className="pt-8 pb-8 px-4 md:px-8 border-b border-lab-border bg-topo">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 text-accent-dark mb-2">
              <Database size={16} />
              <span className="font-mono text-xs uppercase tracking-widest">Database Access</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mt-2">Genetic Archive.</h1>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-lab-text" size={18} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Query specimen by ID, Lineage, or Name..." 
                className="w-full md:w-96 bg-white border border-lab-border text-sm pl-10 pr-10 py-3 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono placeholder:font-sans shadow-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-lab-text hover:text-foreground">
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-xs font-medium border border-lab-border px-3 py-1.5 rounded bg-white shadow-sm">
                <Filter size={14} /> Filter Specs
              </div>
              <div className="flex flex-wrap gap-2">
                {['Indica', 'Sativa', 'Hybrid'].map(t => {
                  const isActive = activeFilter === t;
                  return (
                    <button 
                      key={t} 
                      onClick={() => setActiveFilter(isActive ? "" : t)}
                      className={`text-[10px] font-mono uppercase px-2 py-1 rounded border transition-colors shadow-sm ${isActive ? 'bg-primary text-white border-primary' : 'bg-lab-bg text-lab-text border-lab-border hover:border-primary hover:text-primary'}`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRAIN GRID */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
        {filteredStrains.length === 0 ? (
          <div className="text-center py-24">
            <Database size={48} className="mx-auto text-lab-border mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">No specimens found</h3>
            <p className="text-lab-text">Adjust your query or clear filters to see more genetics.</p>
            <button onClick={() => {setSearchQuery(""); setActiveFilter("");}} className="mt-6 font-mono text-xs text-primary border border-primary/20 bg-primary/5 px-4 py-2 rounded hover:bg-primary/10 transition-colors">CLEAR ALL FILTERS</button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredStrains.map((strain, i) => (
                <Link key={strain.id} href={`/genetics/${strain.slug}`}>
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="group border border-lab-border bg-white rounded-xl overflow-hidden hover:shadow-2xl hover:border-accent/40 transition-all cursor-pointer relative flex flex-col h-full"
                  >
                    {/* Image Section */}
                    <div className="relative h-64 w-full bg-lab-bg border-b border-lab-border overflow-hidden">
                      <Image 
                        src={strain.image} 
                        alt={strain.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      
                      {/* Image Overlay Labels */}
                      <div className="absolute top-4 right-4">
                        <div className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border backdrop-blur-md ${strain.status === 'Active' ? 'bg-black/30 border-accent/50 text-accent' : 'bg-black/30 border-white/20 text-white/80'}`}>
                          {strain.status}
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div>
                          <div className="font-mono text-xs text-accent bg-black/40 backdrop-blur-md px-2 py-1 rounded inline-block mb-1 border border-white/10 shadow-lg">
                            {strain.id}
                          </div>
                          <h3 className="text-2xl font-black tracking-tight text-white drop-shadow-md">{strain.name}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Data Section */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Data Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-6 flex-1">
                        <div className="bg-lab-bg/50 p-3 rounded border border-lab-border/50">
                          <div className="font-mono text-[10px] uppercase text-lab-text mb-1 flex items-center justify-between">Type <Activity size={10} className="text-lab-text/50"/></div>
                          <div className="font-bold text-sm text-foreground">{strain.type}</div>
                        </div>
                        <div className="bg-lab-bg/50 p-3 rounded border border-lab-border/50">
                          <div className="font-mono text-[10px] uppercase text-lab-text mb-1 flex items-center justify-between">THC <Activity size={10} className="text-primary/50"/></div>
                          <div className="font-bold text-sm text-primary">{strain.thc}</div>
                        </div>
                        <div className="bg-lab-bg/50 p-3 rounded border border-lab-border/50">
                          <div className="font-mono text-[10px] uppercase text-lab-text mb-1">Flowering</div>
                          <div className="font-bold text-sm text-foreground">{strain.flow}</div>
                        </div>
                        <div className="bg-lab-bg/50 p-3 rounded border border-lab-border/50">
                          <div className="font-mono text-[10px] uppercase text-lab-text mb-1">Yield</div>
                          <div className="font-bold text-sm text-foreground">{strain.yield}</div>
                        </div>
                      </div>

                      {/* Lineage */}
                      <div className="pt-4 border-t border-lab-border">
                        <div className="flex items-center gap-2 font-mono text-[10px] uppercase text-lab-text mb-2">
                          <Beaker size={12} /> Lineage / Genetics
                        </div>
                        <div className="font-medium text-sm text-foreground bg-lab-bg px-3 py-2 rounded border border-lab-border/50 shadow-inner truncate">
                          {strain.lineage}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </main>
  );
}
