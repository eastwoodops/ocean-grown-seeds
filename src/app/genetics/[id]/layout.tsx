import { Metadata } from 'next';
import { STRAIN_DB } from '@/lib/strains';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const strain = STRAIN_DB.find(s => s.slug === params.id) || STRAIN_DB[0];
  
  const title = `${strain.name} Strain Genetics & Seeds | Ocean Grown Seeds`;
  const description = `${strain.name} is a premium ${strain.type} cannabis strain and seed by Ocean Grown Seeds. Lineage: ${strain.lineage}. Terpenes: ${strain.terpenes}. ${strain.description.substring(0, 120)}...`;
  
  return {
    title,
    description,
    keywords: [strain.name, `${strain.name} strain`, `${strain.name} seeds`, `${strain.name} weed`, "Ocean Grown Seeds", "Cannabis Strain", strain.lineage, strain.type, "Cannabis Genetics", "Cannabis Seeds"],
    openGraph: {
      title,
      description,
      type: "website",
      images: strain.images && strain.images.length > 0 ? strain.images : [strain.image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [strain.image],
    }
  };
}

export default function StrainLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
