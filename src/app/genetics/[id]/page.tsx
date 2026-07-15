import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { STRAIN_DB } from "@/lib/strains";
import { VIDEO_DB } from "@/lib/archive";
import StrainDetailClient from './StrainDetailClient';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const strain = STRAIN_DB.find(s => s.slug === params.id);
  
  if (!strain) {
    return { title: 'Strain Not Found | Ocean Grown Seeds' };
  }
  
  return {
    title: `${strain.name} Seeds & Genetics`,
    description: strain.description.substring(0, 160) + (strain.description.length > 160 ? "..." : ""),
    keywords: [strain.name, "Cannabis Seeds", "Ocean Grown Seeds", strain.type, strain.lineage],
  };
}

export default function StrainPage({ params }: { params: { id: string } }) {
  const strain = STRAIN_DB.find(s => s.slug === params.id);
  
  if (!strain) {
    notFound();
  }
  
  const relatedVideo = VIDEO_DB.find(v => v.title.toLowerCase().includes(strain.name.toLowerCase()) || (v.description && v.description.toLowerCase().includes(strain.name.toLowerCase())));
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": strain.name,
    "description": strain.description,
    "image": strain.images && strain.images.length > 0 ? strain.images : [strain.image],
    "brand": {
      "@type": "Brand",
      "name": "Ocean Grown Seeds"
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Lineage",
        "value": strain.lineage
      },
      {
        "@type": "PropertyValue",
        "name": "Flowering Time",
        "value": strain.flow
      },
      {
        "@type": "PropertyValue",
        "name": "THC Range",
        "value": strain.thc
      },
      {
        "@type": "PropertyValue",
        "name": "Yield",
        "value": strain.yield
      },
      {
        "@type": "PropertyValue",
        "name": "Terpenes",
        "value": strain.terpenes
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.oceangrownseeds.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Genetics",
        "item": "https://www.oceangrownseeds.com/genetics"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": strain.name,
        "item": `https://www.oceangrownseeds.com/genetics/${strain.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, breadcrumbSchema]) }}
      />
      <StrainDetailClient strain={strain} relatedVideo={relatedVideo} />
    </>
  );
}
