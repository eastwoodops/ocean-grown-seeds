import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Genetic Archive",
  description: "Explore the comprehensive Ocean Grown Seeds genetic archive. Search through decades of verified hybridization protocols, lineages, and lab metrics for our complete seed catalog.",
  keywords: ["Cannabis Seed Archive", "Cannabis Lineage Database", "Ocean Grown Genetics", "Cannabis Cultivars"],
  openGraph: {
    title: "Genetic Archive | Ocean Grown Seeds",
    description: "Explore the comprehensive Ocean Grown Seeds genetic archive. Search through decades of verified hybridization protocols.",
    type: "website",
  }
};

export default function GeneticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
