const fs = require('fs');

// --- 1. UPDATE STRAINS DB ---
const strainsFile = '/home/shaolin/.openclaw/workspace/ocean-grown/src/lib/strains.ts';
const completeStrains = `export const STRAIN_DB = [
  { id: "OGS-001", slug: "jawa-pie", name: "JAWA PIE", lineage: "Key Lime Pie x Alien Rift", mother: "Key Lime Pie", father: "Alien Rift", type: "Indica Dominant", flow: "56-63 Days", yield: "High", thc: "22-26%", terpenes: "Limonene, Caryophyllene, Myrcene", aroma: "Lime, Gas, Earthy Kush, Graham Cracker", status: "Active", description: "Jawa Pie is a formidable indica-dominant hybrid resulting from the careful cross pollination of Key Lime Pie and our flagship male, Alien Rift.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/JAWAPIE-1-web-300x300.jpg" },
  { id: "OGS-002", slug: "vader-og", name: "VADER OG", lineage: "Ocean Grown Kush x SFV OG", mother: "Ocean Grown Kush", father: "SFV OG", type: "Hybrid", flow: "60-70 Days", yield: "Medium", thc: "24-28%", terpenes: "Myrcene, Limonene, Linalool", aroma: "Lemon, Pine, Deep Earth, Classic Kush Fuel", status: "Archived", description: "Vader OG is the crown jewel of classic Ocean Grown genetics.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/Vader-OG-3-web-300x300.jpg" },
  { id: "OGS-003", slug: "alien-rift", name: "ALIEN RIFT", lineage: "Alien Abduction x Alien Dawg x Alien OG", mother: "Alien Abduction", father: "Alien Dawg x Alien OG", type: "Indica", flow: "56-60 Days", yield: "High", thc: "25-29%", terpenes: "Caryophyllene, Myrcene, Humulene", aroma: "Spicy Hash, Skunk, Sour Lemon", status: "Active", description: "Alien Rift is an absolute resin factory and our most utilized breeding stud.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/alien-rift-web-300x300.jpg" },
  { id: "OGS-004", slug: "obi-wan-og", name: "OBI WAN OG", lineage: "Ghost OG x Alien Rift", mother: "Ghost OG", father: "Alien Rift", type: "Hybrid", flow: "65-75 Days", yield: "High", thc: "26-30%", terpenes: "Limonene, Caryophyllene, Pinene", aroma: "Citrus, Gas, Floral Pine", status: "Active", description: "Obi Wan OG merges the legendary, euphoric Ghost OG cut with the resinous power of our Alien Rift male.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/obiwan-og-300x300.jpg" },
  { id: "OGS-005", slug: "dark-plasma", name: "DARK PLASMA", lineage: "Girl Scout Cookies (Forum Cut) x Alien Rift", mother: "Girl Scout Cookies", father: "Alien Rift", type: "Indica Dominant", flow: "63-70 Days", yield: "Medium/High", thc: "24-28%", terpenes: "Caryophyllene, Linalool, Myrcene", aroma: "Sweet Dough, Chocolate, Fuel", status: "Active", description: "Dark Plasma captures the famed Forum Cut Girl Scout Cookies structure and infuses it with the yield and trichome density of Alien Rift.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/dark-plasma-2-300x300.jpg" },
  { id: "OGS-007", slug: "dreadnought", name: "DREADNOUGHT", lineage: "Starfighter x Alien Rift", mother: "Starfighter", father: "Alien Rift", type: "Hybrid", flow: "60-65 Days", yield: "High", thc: "24-28%", terpenes: "Limonene, Caryophyllene", aroma: "Lemon, Gas", status: "Active", description: "High yielding hybrid with massive resin production.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2021/12/dreadnought-web-300x300.jpg" },
  { id: "OGS-008", slug: "yoda-soda", name: "YODA SODA", lineage: "Unknown x Unknown", mother: "Unknown", father: "Unknown", type: "Hybrid", flow: "60-70 Days", yield: "Medium/High", thc: "22-26%", terpenes: "Myrcene", aroma: "Sweet, Citrus, Fizz", status: "Active", description: "A highly aromatic cultivar that fizzes on the palate.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2021/06/yoda-soda-web-300x300.jpg" },
  { id: "OGS-009", slug: "bear-mace", name: "BEAR MACE", lineage: "Unknown x Unknown", mother: "Unknown", father: "Unknown", type: "Indica Dominant", flow: "60-65 Days", yield: "High", thc: "25-30%", terpenes: "Caryophyllene", aroma: "Spicy, Gas, Hash", status: "Active", description: "A heavy hitter with dense colas.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2021/12/bear-mace-web-300x300.jpg" },
  { id: "OGS-010", slug: "jawa-juice", name: "JAWA JUICE", lineage: "Jawa Pie x Unknown", mother: "Jawa Pie", father: "Unknown", type: "Hybrid", flow: "56-65 Days", yield: "Medium", thc: "22-26%", terpenes: "Limonene", aroma: "Lime, Gas", status: "Active", description: "A resinous offspring of Jawa Pie.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2021/06/jawa-juice-web-01-300x300.jpg" },
  { id: "OGS-011", slug: "kauai-electrics", name: "KAUAI ELECTRICS", lineage: "Hawaiian Landrace", mother: "Hawaiian", father: "Hawaiian", type: "Sativa", flow: "70-80 Days", yield: "High", thc: "18-22%", terpenes: "Terpinolene", aroma: "Tropical, Haze", status: "Active", description: "Pure tropical sativa energy.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2020/02/kauai-electrics-vdr-01-300x300.jpg" },
  { id: "OGS-012", slug: "maui-wowie", name: "MAUI WOWIE", lineage: "Hawaiian Landrace", mother: "Hawaiian", father: "Hawaiian", type: "Sativa", flow: "70-75 Days", yield: "Medium/High", thc: "20-24%", terpenes: "Myrcene, Limonene", aroma: "Pineapple, Citrus", status: "Active", description: "Classic tropical profile from Hawaii.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2020/03/maui-wowie-02-1-300x300.jpg" },
  { id: "OGS-013", slug: "molten-core", name: "MOLTEN CORE", lineage: "Unknown x Unknown", mother: "Unknown", father: "Unknown", type: "Indica Dominant", flow: "60-65 Days", yield: "High", thc: "24-28%", terpenes: "Caryophyllene", aroma: "Earth, Gas", status: "Active", description: "Deeply relaxing with fiery hairs.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/molten-core-web-02-300x300.jpg" },
  { id: "OGS-014", slug: "solar-sugar", name: "SOLAR SUGAR", lineage: "Unknown x Unknown", mother: "Unknown", father: "Unknown", type: "Hybrid", flow: "60-70 Days", yield: "Medium", thc: "22-26%", terpenes: "Limonene", aroma: "Sweet, Citrus", status: "Active", description: "Bright, uplifting, and coated in sugar.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2021/03/solar-sugar-sq-300x300.png" },
  { id: "OGS-015", slug: "viking-pie", name: "VIKING PIE", lineage: "Unknown x Jawa Pie", mother: "Unknown", father: "Jawa Pie", type: "Indica Dominant", flow: "60-65 Days", yield: "High", thc: "24-28%", terpenes: "Myrcene", aroma: "Berry, Dough", status: "Active", description: "A warrior's yield with baker's aromas.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2021/02/viking-pie-300x300.jpg" },
  { id: "OGS-016", slug: "dark-helmet", name: "DARK HELMET", lineage: "Forum GSC x Jawa Pie", mother: "Forum GSC", father: "Jawa Pie", type: "Indica Dominant", flow: "60-65 Days", yield: "Medium", thc: "26-30%", terpenes: "Caryophyllene", aroma: "Cookie Dough, Lime", status: "Active", description: "Dark, dense, and dangerously potent.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/Dark-Helmet-2-300x300.jpg" },
  { id: "OGS-017", slug: "dough-g", name: "DOUGH-G", lineage: "Unknown x Unknown", mother: "Unknown", father: "Unknown", type: "Hybrid", flow: "60-70 Days", yield: "High", thc: "22-26%", terpenes: "Myrcene", aroma: "Sweet Dough", status: "Active", description: "Sticky and sweet.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/dough-g-01-300x300.jpg" },
  { id: "OGS-018", slug: "dreaded-pie", name: "DREADED PIE", lineage: "Dreadnought x Jawa Pie", mother: "Dreadnought", father: "Jawa Pie", type: "Hybrid", flow: "60-65 Days", yield: "High", thc: "24-28%", terpenes: "Limonene", aroma: "Lemon, Dough", status: "Active", description: "Massive colas smelling of citrus dough.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2025/10/Dreaded-Pie-1-300x300.jpg" },
  { id: "OGS-019", slug: "fader-actual", name: "FADER ACTUAL", lineage: "Unknown x Unknown", mother: "Unknown", father: "Unknown", type: "Hybrid", flow: "60-70 Days", yield: "Medium/High", thc: "22-26%", terpenes: "Myrcene", aroma: "Gas, Floral", status: "Active", description: "A well-balanced hybrid.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/11/fader-actual-1-web-300x300.jpg" },
  { id: "OGS-020", slug: "highlander", name: "HIGHLANDER", lineage: "Unknown x Unknown", mother: "Unknown", father: "Unknown", type: "Hybrid", flow: "65-75 Days", yield: "High", thc: "24-28%", terpenes: "Pinene", aroma: "Pine, Earth", status: "Active", description: "There can be only one.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/highlander-web-01-300x300.jpg" },
  { id: "OGS-021", slug: "jawa-kush", name: "JAWA KUSH", lineage: "Jawa Pie x Kush", mother: "Jawa Pie", father: "Kush", type: "Indica Dominant", flow: "56-65 Days", yield: "Medium/High", thc: "24-28%", terpenes: "Caryophyllene", aroma: "Gas, Lime", status: "Active", description: "A heavy kush backcross.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/jawa-kush-2-300x300.jpg" },
  { id: "OGS-006", slug: "ninja-fruit", name: "NINJA FRUIT", lineage: "Grapefruit Haze x Grape Ape", mother: "Grapefruit Haze", father: "Grape Ape", type: "Sativa Dominant", flow: "63-70 Days", yield: "High", thc: "20-24%", terpenes: "Terpinolene, Myrcene, Ocimene", aroma: "Sweet Grape, Haze, Tropical Fruit", status: "Active", description: "Ninja Fruit is a vibrant, uplifting Sativa-dominant hybrid.", image: "https://www.oceangrownseeds.com/wp-content/uploads/2019/10/seeds-edit-1400x788.jpg" }
];`;
fs.writeFileSync(strainsFile, completeStrains);

// --- 2. ADD FOOTER & MOBILE NAV COMPONENT ---
const footerComponent = `/home/shaolin/.openclaw/workspace/ocean-grown/src/components/Footer.tsx`;
fs.mkdirSync('/home/shaolin/.openclaw/workspace/ocean-grown/src/components', { recursive: true });
fs.writeFileSync(footerComponent, `"use client";
import Link from 'next/link';
import { Droplet } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-topo opacity-5 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Image src="/logo-white.png" alt="Seal" width={40} height={40} className="opacity-90 invert" />
            <span className="font-bold tracking-tight text-xl">OCEAN GROWN</span>
          </div>
          <p className="text-lab-bg/70 max-w-sm mb-6 text-sm">
            Highly hybridized, artisan-crafted cannabis genetics. Cultivated with strict laboratory standards to ensure optimal phenotypic expression.
          </p>
          <div className="font-mono text-[10px] uppercase text-lab-bg/50 tracking-widest">
            © 2026 Ocean Grown Seeds. All rights reserved.
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 tracking-widest uppercase text-sm">Database</h4>
          <ul className="flex flex-col gap-4 text-sm text-lab-bg/70">
            <li><Link href="/genetics" className="hover:text-accent transition-colors">Genetics Catalog</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Strain Archive</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">R&D Protocols</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 tracking-widest uppercase text-sm">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-lab-bg/70">
            <li><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Contact Support</Link></li>
            <li><Link href="#" className="hover:text-accent transition-colors">Retail Locations</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
`);

// --- 3. UPDATE LAYOUT TO INCLUDE FOOTER ---
const layoutFile = '/home/shaolin/.openclaw/workspace/ocean-grown/src/app/layout.tsx';
let layoutContent = fs.readFileSync(layoutFile, 'utf8');
if (!layoutContent.includes('Footer')) {
    layoutContent = layoutContent.replace('import "./globals.css";', 'import "./globals.css";\nimport Footer from "@/components/Footer";');
    layoutContent = layoutContent.replace('{children}', '{children}\n        <Footer />');
    fs.writeFileSync(layoutFile, layoutContent);
}

// --- 4. FIX HOMEPAGE (Mobile + Images + Strains + Links) ---
const pageFile = '/home/shaolin/.openclaw/workspace/ocean-grown/src/app/page.tsx';
const newPage = `"use client";
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
              <Link key={strain.id} href={\`/genetics/\${strain.slug}\`}>
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
`;
fs.writeFileSync(pageFile, newPage);

// --- 5. FIX GENETICS HEADER (MOBILE RESPONSIVE) ---
// I'll write a small replacement script for the genetics pages headers.
