"use client";
import { motion } from "framer-motion";
import { Dna, ArrowRight, Activity, Search, BookOpen, Film, Play, FlaskConical, Beaker, Sprout, Scissors } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { STRAIN_DB } from "@/lib/strains";
import { VIDEO_DB } from "@/lib/archive";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ocean Grown Seeds",
  "url": "https://www.oceangrownseeds.com/",
  "logo": "https://www.oceangrownseeds.com/logo-black.png",
  "description": "Highly hybridized, artisan-crafted cannabis genetics from Ocean Grown Seeds. Cultivated with strict laboratory standards to ensure optimal phenotypic expression and stability.",
  "sameAs": [
    "https://www.instagram.com/oceangrownseeds/",
    "https://www.youtube.com/@oceangrownseeds",
    "https://www.facebook.com/OceanGrownSeeds",
    "https://twitter.com/oceangrownseeds"
  ]
};

export default function Home() {

  const getIcon = (category: string) => {
    if (category === 'Genetics') return <Dna className="text-primary flex-shrink-0" size={24} />;
    if (category === 'Cultivation') return <Sprout className="text-primary flex-shrink-0" size={24} />;
    if (category === 'Harvesting') return <Scissors className="text-primary flex-shrink-0" size={24} />;
    return <Beaker className="text-primary flex-shrink-0" size={24} />;
  };

  const featuredStrains = STRAIN_DB.filter(s => 
    ['vader-og', 'alien-rift', 'maui-wowie', 'dark-plasma', 'jawa-pie', 'witches-brew'].includes(s.slug)
  );

  const featuredVideos = VIDEO_DB.slice(0, 3);
  
  const featuredResearch = [
    { title: "Clinical Efficacy of β-Myrcene", slug: "clinical-efficacy-myrcene", desc: "Sedative, analgesic, and anti-inflammatory pathways evaluated in clinical literature.", category: "Compounds" },
    { title: "Epigenetics: Environmental Influence on Phenotypic Expression", slug: "epigenetics-cannabis-phenotypes", desc: "How temperature, lighting, and stress alter gene expression without changing the underlying DNA sequence.", category: "Genetics" },
    { title: "Canopy Management: Crop Steering and Yield Maximization", slug: "canopy-management-yield-maximization", desc: "Techniques for manipulating apical dominance to increase total biomass and floral density.", category: "Cultivation" }
  ];

  return (
    <main className="min-h-screen bg-topo relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <header className="absolute top-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center border-b border-lab-border bg-white/50 backdrop-blur-md gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Ocean Grown Seeds Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-lab-text">
          <Link href="/genetics" className="hover:text-primary transition-colors">GENETICS</Link>
          <Link href="/research" className="hover:text-primary transition-colors">RESEARCH</Link>
          <Link href="/archive" className="hover:text-primary transition-colors">ARCHIVE</Link>
        </nav>
        <div className="hidden md:block w-24"></div>
      </header>

      <section className="relative pt-32 md:pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-accent/20 text-accent-dark">
                <Sprout size={16} />
              </span>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-lab-text m-0">
                Protocol: Hybridization
              </h2>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05] text-foreground">
              Ocean Grown <br/>
              <span className="text-primary">Genetics.</span>
            </h1>

            <p className="text-base md:text-lg text-lab-text mb-10 max-w-lg leading-relaxed">
              Highly hybridized, artisan-crafted cannabis genetics from Ocean Grown Seeds. Cultivated with strict laboratory standards to ensure optimal phenotypic expression and stability.
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
                <span className="font-bold text-xs md:text-sm">Alien Abduction x Alien Dawg x Alien OG</span>
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

      <section className="py-16 md:py-24 px-4 md:px-8 border-t border-lab-border bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-0">
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <Dna size={16} />
                <span className="font-mono text-xs uppercase tracking-widest">Specimen Inventory</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Genetic Archive.</h2>
              <p className="text-lab-text max-w-xl">Verified hybridization protocols. Explore our flagship cultivars renowned for unparalleled resin production and profound terpene profiles.</p>
            </div>
            <Link href="/genetics" className="flex items-center justify-center w-full md:w-auto gap-2 text-sm font-medium border border-lab-border px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors shadow-sm">
              <Search size={16} /> Search Full Database
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

      <section className="py-16 md:py-24 px-4 md:px-8 border-t border-lab-border bg-topo relative">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <div className="flex items-center gap-2 text-accent-dark mb-2">
                  <BookOpen size={16} />
                  <span className="font-mono text-xs uppercase tracking-widest">Applied Cannabis Science</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Clinical Research.</h2>
                <p className="text-lab-text max-w-2xl">Peer-reviewed clinical data and advanced cultivation protocols bridging the gap between agronomy and therapeutic efficacy.</p>
              </div>
              <Link href="/research" className="flex items-center justify-center w-full md:w-auto gap-2 text-sm font-medium border border-lab-border bg-white px-6 py-3 rounded-md hover:border-primary hover:text-primary transition-colors shadow-sm">
                View Full Library <ArrowRight size={16} />
              </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             {featuredResearch.map((art, i) => (
               <Link key={art.slug} href={`/research/${art.slug}`} className="block group h-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-lab-border bg-white p-6 rounded-xl h-full flex flex-col hover:border-primary hover:shadow-xl transition-all relative overflow-hidden"
                  >
                     <div className="flex justify-between items-start mb-4">
                       {getIcon(art.category)}
                       <span className="font-mono text-[10px] px-2 py-1 bg-lab-bg border border-lab-border rounded text-lab-text uppercase tracking-widest">{art.category}</span>
                     </div>
                     <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{art.title}</h3>
                     <p className="text-lab-text text-sm mb-6 flex-1">{art.desc}</p>
                     <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-dark uppercase tracking-widest mt-auto">
                       Read Publication <ArrowRight size={14} />
                     </div>
                  </motion.div>
               </Link>
             ))}
           </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 border-t border-lab-border bg-foreground text-background relative overflow-hidden">
         <div className="absolute inset-0 bg-topo opacity-5 mix-blend-overlay"></div>
         <div className="max-w-7xl mx-auto relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Film size={16} />
                  <span className="font-mono text-xs uppercase tracking-widest">Video & Media Catalog</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-white">The Vault.</h2>
                <p className="text-lab-bg/70 max-w-2xl">Curated grow logs, pheno hunts, cultivation tutorials, and strain reviews directly from the VaderOG archives.</p>
              </div>
              <Link href="/archive" className="flex items-center justify-center w-full md:w-auto gap-2 text-sm font-medium border border-white/20 bg-white/5 px-6 py-3 rounded-md hover:bg-primary hover:border-primary transition-all text-white">
                Enter The Vault <Play size={16} fill="currentColor" className="ml-1" />
              </Link>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             {featuredVideos.map((video, i) => (
               <Link key={video.id} href="/archive" className="block group h-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-white/10 bg-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer flex flex-col h-full"
                  >
                    <div className="relative aspect-video w-full bg-black border-b border-white/10 overflow-hidden">
                       <Image 
                         src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} 
                         alt={video.title} 
                         fill 
                         className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                       />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                             <Play className="text-white fill-white ml-1" size={18} />
                          </div>
                       </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                       <span className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">{video.category}</span>
                       <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary transition-colors line-clamp-2">{video.title}</h3>
                       <p className="text-lab-bg/50 text-sm line-clamp-2">{video.description}</p>
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
