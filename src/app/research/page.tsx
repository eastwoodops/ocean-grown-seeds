"use client";
import Link from 'next/link';
import { Beaker, BookOpen, ArrowRight, Search, Filter, X, Dna, Sprout, Scissors } from 'lucide-react';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const getIcon = (tags: string[]) => {
  const primary = tags[0];
  if (primary === 'Genetics') return <Dna className="text-primary flex-shrink-0" size={24} />;
  if (primary === 'Cultivation') return <Sprout className="text-primary flex-shrink-0" size={24} />;
  if (primary === 'Harvesting') return <Scissors className="text-primary flex-shrink-0" size={24} />;
  return <Beaker className="text-primary flex-shrink-0" size={24} />;
};

export default function ResearchIndex() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  

  const categories = ["Genetics", "Cultivation", "Compounds", "Harvesting", "Terpenes", "Yield Optimization", "Organic Farming", "Breeding", "Cannabinoids"];

  const filteredArticles = useMemo(() => {
    const articles = [
    { title: "Clinical Efficacy of β-Myrcene", slug: "clinical-efficacy-myrcene", desc: "Sedative, analgesic, and anti-inflammatory pathways evaluated in clinical literature.", tags: ["Terpenes", "Compounds", "Pain Management"] },
    { title: "β-Caryophyllene: The Dietary Cannabinoid", slug: "caryophyllene-dietary-cannabinoid", desc: "Examining CB2 receptor agonism and systemic anti-inflammatory responses.", tags: ["Terpenes", "Compounds", "Anti-inflammatory"] },
    { title: "D-Limonene: Anxiolytic Properties", slug: "limonene-anxiolytic-properties", desc: "Research highlighting the stress-relieving and mood-elevating mechanisms of Limonene.", tags: ["Terpenes", "Compounds", "Mental Health"] },
    { title: "Epigenetics: Environmental Influence on Phenotypic Expression", slug: "epigenetics-cannabis-phenotypes", desc: "How temperature, lighting, and stress alter gene expression without changing the underlying DNA sequence.", tags: ["Genetics", "Breeding", "Plant Science"] },
    { title: "Mendelian Genetics: Unlocking Recessive Traits", slug: "mendelian-genetics-recessive-traits", desc: "Understanding Punnett squares, homozygous alleles, and the isolation of hidden genetic markers in F2 generations.", tags: ["Genetics", "Breeding"] },
    { title: "Hydroponics vs. Living Soil: Terpene Biosynthesis", slug: "hydroponics-living-soil-terpene-biosynthesis", desc: "Analyzing the differing organoleptic expressions and biosynthetic pathways between inert substrates and organic webs.", tags: ["Cultivation", "Organic Farming", "Terpenes"] },
    { title: "Light Deprivation: Manipulating Photoperiods", slug: "light-deprivation-photoperiod-manipulation", desc: "The pros, cons, and physiological impacts of artificially inducing flowering cycles in greenhouse environments.", tags: ["Cultivation", "Yield Optimization"] },
    { title: "Polyploidy in Cannabis: Triploids and Yield", slug: "polyploidy-cannabis-triploids", desc: "Exploring the induction of multiple chromosome sets to increase biomass, resin production, and genetic stability.", tags: ["Genetics", "Yield Optimization", "Breeding"] },
    { title: "The Entourage Effect: Synergistic Mechanisms", slug: "entourage-effect-synergistic-mechanisms", desc: "Re-evaluating how cannabinoids and terpenoids interact to modulate the endocannabinoid system.", tags: ["Compounds", "Cannabinoids", "Terpenes"] },
    { title: "Hermaphroditism: Stress-Induced Sex Reversal", slug: "hermaphroditism-stress-induced-reversal", desc: "Understanding the biological triggers of monoecious traits and evaluating the stability of feminized genetics.", tags: ["Genetics", "Plant Pathology", "Breeding"] },
    { title: "Landrace Preservation & Genetic Drift", slug: "landrace-preservation-genetic-drift", desc: "The critical importance of conserving indigenous, unhybridized cultivars for agricultural biodiversity.", tags: ["Genetics", "Biodiversity", "Breeding"] },
    { title: "Autoflowering Genetics: Cannabis Ruderalis", slug: "autoflowering-genetics-ruderalis", desc: "The evolutionary adaptation of day-neutral traits and their integration into modern high-THC hybrids.", tags: ["Genetics", "Breeding", "Cultivation"] },
    { title: "Tissue Culture: Micropropagation & Pathogen Elimination", slug: "tissue-culture-micropropagation-pathogens", desc: "Securing elite genetics in sterile environments to eradicate viroids and maintain perpetual vigor.", tags: ["Genetics", "Plant Pathology", "Cultivation"] },
    { title: "Canopy Management: Crop Steering and Yield Maximization", slug: "canopy-management-yield-maximization", desc: "Techniques for manipulating apical dominance to increase total biomass and floral density.", tags: ["Cultivation", "Yield Optimization"] },
    { title: "Abiotic Stress Elicitation: Maximizing Cannabinoid Synthesis", slug: "abiotic-stress-maximizing-thc", desc: "How calculated environmental stressors trigger defensive THC and terpene production.", tags: ["Cultivation", "THC Maximization", "Plant Science"] },
    { title: "The Rhizosphere: Mycorrhizal Networks and Microorganisms", slug: "rhizosphere-microbial-inoculants", desc: "Leveraging plant growth-promoting rhizobacteria (PGPR) and fungi for nutrient bioavailability.", tags: ["Cultivation", "Organic Farming", "Microbiology"] },
    { title: "Beyond THC: The Therapeutic Potential of Minor Cannabinoids", slug: "minor-cannabinoids-cbg-cbn-thcv", desc: "Analyzing the biosynthetic pathways and physiological effects of CBG, CBN, and THCV.", tags: ["Compounds", "Cannabinoids", "Medical Cannabis"] },
    { title: "Post-Harvest Physiology: Curing and Volatile Compound Preservation", slug: "post-harvest-curing-terpene-preservation", desc: "The science of moisture migration, chlorophyll degradation, and preventing monoterpene volatilization.", tags: ["Harvesting", "Curing", "Terpenes"] },
    { title: "Seed Sprouting Explained", slug: "seed-sprouting-explained", desc: "A step-by-step tutorial on seed germination, early root-zone establishment, and the biological stages of sprouting cannabis seeds.", tags: ["Cultivation","Tutorial","Seed Germination"] }
  ];
    return articles.filter(art => {
      const searchStr = searchQuery.toLowerCase();
      const matchesSearch = 
        art.title.toLowerCase().includes(searchStr) || 
        art.desc.toLowerCase().includes(searchStr) ||
        art.tags.some(t => t.toLowerCase().includes(searchStr));
      
      const matchesFilter = activeFilter ? art.tags.includes(activeFilter) : true;

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

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
          <Link href="/archive" className="hover:text-primary transition-colors pb-1">ARCHIVE</Link>
        </nav>
        <div className="hidden md:block w-24"></div>
      </header>

      <section className="pt-16 pb-8 px-4 md:px-8 border-b border-lab-border bg-topo">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 text-accent-dark mb-2">
              <BookOpen size={16} />
              <span className="font-mono text-xs uppercase tracking-widest">Agronomy, Genetics & Clinical Research</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-2">Applied Cannabis Science.</h1>
            <p className="mt-4 max-w-2xl text-lab-text text-lg">A comprehensive library of peer-reviewed clinical data, advanced cultivation protocols, and applied genetic science bridging the gap between agronomy and therapeutic efficacy.</p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-lab-text" size={18} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications..." 
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
                <Filter size={14} /> Taxonomy
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

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto min-h-[50vh]">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-24">
            <BookOpen size={48} className="mx-auto text-lab-border mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-2">No publications found</h3>
            <p className="text-lab-text">Adjust your search query or clear taxonomy filters.</p>
            <button onClick={() => {setSearchQuery(""); setActiveFilter("");}} className="mt-6 font-mono text-xs text-primary border border-primary/20 bg-primary/5 px-4 py-2 rounded hover:bg-primary/10 transition-colors">CLEAR FILTERS</button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredArticles.map(art => (
                <Link key={art.slug} href={`/research/${art.slug}`} className="block group h-full">
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="border border-lab-border bg-white p-6 rounded-xl h-full flex flex-col hover:border-primary hover:shadow-xl transition-all relative overflow-hidden"
                  >
                     <div className="flex justify-between items-start mb-4">
                       {getIcon(art.tags)}
                       <div className="flex flex-wrap gap-1 justify-end">
                         {art.tags.slice(0,2).map(tag => (
                           <span key={tag} className="font-mono text-[9px] px-1.5 py-0.5 bg-lab-bg border border-lab-border rounded text-lab-text uppercase tracking-widest">{tag}</span>
                         ))}
                         {art.tags.length > 2 && <span className="font-mono text-[9px] px-1.5 py-0.5 bg-lab-bg border border-lab-border rounded text-lab-text uppercase tracking-widest">+{art.tags.length - 2}</span>}
                       </div>
                     </div>
                     <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{art.title}</h3>
                     <p className="text-lab-text text-sm mb-6 flex-1">{art.desc}</p>
                     <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent-dark uppercase tracking-widest mt-auto">
                       Read Publication <ArrowRight size={14} />
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
