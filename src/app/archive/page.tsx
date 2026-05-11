"use client";
import Link from 'next/link';
import { Play, Film, Search, Filter, X, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VIDEO_DB, Video } from '@/lib/archive';

export default function ArchiveIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const categories = ["Grow Logs", "Strain Reviews", "Cultivation", "Interviews"];

  const filteredVideos = useMemo(() => {
    return VIDEO_DB.filter(v => {
      const searchStr = searchQuery.toLowerCase();
      const matchesSearch = 
        v.title.toLowerCase().includes(searchStr) || 
        v.description?.toLowerCase().includes(searchStr);
      
      const matchesFilter = activeFilter ? v.category === activeFilter : true;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeVideo]);

  return (
    <main className="min-h-screen bg-background relative pb-24">
      <header className="sticky top-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center border-b border-lab-border bg-white/80 backdrop-blur-md gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Ocean Grown Seeds Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-lab-text">
          <Link href="/genetics" className="hover:text-primary transition-colors pb-1">GENETICS</Link>
          <Link href="/research" className="hover:text-primary transition-colors pb-1">RESEARCH</Link>
          <Link href="/archive" className="text-primary border-b-2 border-primary pb-1">ARCHIVE</Link>
        </nav>
        <div className="hidden md:block w-24"></div>
      </header>

      <div className="absolute inset-0 bg-topo opacity-30 z-0 pointer-events-none" />

      <section className="pt-16 pb-8 px-4 md:px-8 border-b border-lab-border bg-topo relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 text-accent-dark mb-2">
              <Film size={16} />
              <span className="font-mono text-xs uppercase tracking-widest">Video & Media Catalog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-2">The Vault.</h1>
            <p className="mt-4 max-w-2xl text-lab-text text-lg">Curated grow logs, pheno hunts, cultivation tutorials, and strain reviews directly from the VaderOG archives.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-lab-text" size={18} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the vault..." 
                className="w-full md:w-96 bg-white border border-lab-border text-sm pl-10 pr-10 py-3 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-mono placeholder:font-sans shadow-sm"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-lab-text hover:text-foreground">
                  <X size={16} />
                </button>
              )}
            </div>
            <div className="flex flex-col items-start gap-3 mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-xs font-medium border border-lab-border px-3 py-1.5 rounded bg-white shadow-sm">
                <Filter size={14} /> Category
              </div>
              <div className="flex flex-wrap gap-2 max-w-md">
                {categories.map(t => {
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

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto min-h-[50vh] relative z-10">
        {filteredVideos.length === 0 ? (
          <div className="text-center py-24 bg-white/50 backdrop-blur rounded-xl border border-lab-border">
            <Film size={48} className="mx-auto text-lab-border mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">No videos found</h3>
            <p className="text-lab-text">Adjust your search query or clear category filters.</p>
            <button onClick={() => {setSearchQuery(""); setActiveFilter("");}} className="mt-6 font-mono text-xs text-primary border border-primary/20 bg-primary/5 px-4 py-2 rounded hover:bg-primary/10 transition-colors">CLEAR FILTERS</button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredVideos.map((video) => (
                <motion.div 
                  key={video.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group border border-lab-border bg-white rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/40 transition-all cursor-pointer flex flex-col h-full"
                  onClick={() => setActiveVideo(video)}
                >
                  <div className="relative aspect-video w-full bg-lab-bg border-b border-lab-border overflow-hidden">
                     <Image 
                       src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
                       alt={video.title} 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform shadow-xl">
                           <Play className="text-white fill-white ml-1" size={24} />
                        </div>
                     </div>
                     <div className="absolute bottom-3 left-3 flex gap-2">
                        <span className="font-mono text-[10px] px-2 py-1 bg-black/70 backdrop-blur border border-white/20 rounded text-white uppercase tracking-widest">{video.category}</span>
                     </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                     <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-snug">{video.title}</h3>
                     <p className="text-lab-text text-sm mb-6 flex-1 line-clamp-3">{video.description}</p>
                     
                     <div className="flex items-center justify-between pt-4 border-t border-lab-border/50 text-xs font-mono text-lab-text">
                        <span className="flex items-center gap-1"><Calendar size={12}/> {video.date}</span>
                        <span className="text-primary font-bold">WATCH NOW</span>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex flex-col"
          >
            <div className="flex justify-between items-center p-6 md:px-12 border-b border-white/10">
               <div>
                 <h2 className="text-white font-bold text-xl md:text-2xl">{activeVideo.title}</h2>
                 <p className="text-white/50 font-mono text-xs uppercase tracking-widest mt-1">{activeVideo.category} • {activeVideo.date}</p>
               </div>
               <button 
                 onClick={() => setActiveVideo(null)}
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
               >
                 <X size={24} />
               </button>
            </div>
            
            <div className="flex-1 flex items-center justify-center p-4 md:p-12" onClick={(e) => { if(e.target === e.currentTarget) setActiveVideo(null); }}>
               <motion.div 
                 initial={{ scale: 0.95, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0.95, opacity: 0 }}
                 className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
               >
                 <iframe 
                   width="100%" 
                   height="100%" 
                   src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`} 
                   title={activeVideo.title} 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen
                   className="w-full h-full"
                 ></iframe>
               </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
