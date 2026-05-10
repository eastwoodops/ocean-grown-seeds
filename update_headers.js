const fs = require('fs');

function updateHeader(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const oldHeaderRegex = /<header className="absolute top-0 w-full z-50 px-8 py-6 flex justify-between items-center border-b border-lab-border bg-white\/80 backdrop-blur-md">[\s\S]*?<\/header>/;
    
    const newHeader = `<header className="absolute top-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center border-b border-lab-border bg-white/80 backdrop-blur-md gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-black.png" alt="Ocean Grown Seeds Seal" width={40} height={40} className="opacity-90" priority />
          <span className="font-bold tracking-tight text-xl text-foreground">OCEAN GROWN</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-lab-text">
          <Link href="/genetics" className="text-primary border-b-2 border-primary pb-1">GENETICS</Link>
          <Link href="/genetics" className="hover:text-primary transition-colors pb-1">RESEARCH</Link>
          <Link href="/genetics" className="hover:text-primary transition-colors pb-1">ARCHIVE</Link>
        </nav>
        <div>
          <Link href="/genetics" className="flex items-center gap-2 text-xs font-mono bg-lab-bg border border-lab-border text-foreground px-4 py-2 rounded uppercase tracking-widest hover:bg-lab-border transition-all shadow-sm">
            Login <ArrowRight size={14} />
          </Link>
        </div>
      </header>`;
      
    content = content.replace(oldHeaderRegex, newHeader);
    content = content.replace('grid-cols-2 md:grid-cols-4', 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4');
    fs.writeFileSync(filePath, content);
}

updateHeader('/home/shaolin/.openclaw/workspace/ocean-grown/src/app/genetics/page.tsx');
updateHeader('/home/shaolin/.openclaw/workspace/ocean-grown/src/app/genetics/[id]/page.tsx');

