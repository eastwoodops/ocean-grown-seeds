export type Video = {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  description: string;
  date: string;
};

export const VIDEO_DB: Video[] = [
  { id: "VID-100", youtubeId: "A3vJ5Vl3W9k", title: "The Art of Cannabis Breeding", category: "Interviews", description: "A deep dive into the methodology and philosophy of cannabis breeding, isolation of recessive traits, and the stabilization protocols utilized by VaderOG.", date: "Dec 2016" },
  { id: "VID-101", youtubeId: "7_f-pk_az-4", title: "Flowering out Dreadnought OG, Jawa Pie and Jawa Juice!", category: "Strain Reviews", description: "Detailed flowering logs documenting the canopy management and phenotypic expression of Dreadnought OG, Jawa Pie, and Jawa Juice under intense lighting.", date: "Jul 2025" },
  { id: "VID-102", youtubeId: "b2JpxO31th8", title: "Making Breeding Selection from Seed and going into Flowering!", category: "Cultivation", description: "VaderOG details the critical transition from vegetative growth into the flowering cycle, highlighting the selection process for identifying elite breeding studs.", date: "Jun 2025" },
  { id: "VID-103", youtubeId: "3USG4l3vXmQ", title: "Germinating Seeds for continued Breed Selection!", category: "Cultivation", description: "The foundational steps of starting a pheno hunt. Evaluating germination rates, early vigor, and structural markers for continued breed selection.", date: "May 2025" },
  { id: "VID-104", youtubeId: "Gbh2xDwfUrY", title: "Seed to Harvest for Vader OG Kush Breeding Selection!", category: "Grow Logs", description: "A comprehensive, start-to-finish timeline of the Vader OG Kush breeding selection process, tracking the genetic lineage from seed to final harvest.", date: "Apr 2023" },
  { id: "VID-105", youtubeId: "F9A-oplbDk4", title: "Flowering Jawa Kush and Maui Wowie!", category: "Strain Reviews", description: "Side-by-side cultivation analysis comparing the flowering traits, stretch, and nutrient demands of Jawa Kush against the classic Maui Wowie sativa.", date: "Feb 2023" },
  { id: "VID-106", youtubeId: "872Gfh-Z34c", title: "Seed to Harvest In 10 Minutes!", category: "Grow Logs", description: "A rapid-fire, high-speed timelapse condensing an entire cultivation cycle—from germination to harvest—into a seamless 10-minute visual journey.", date: "Feb 2021" },
  { id: "VID-107", youtubeId: "WBwblF2CbPI", title: "Cannabis Flush for Harvest", category: "Cultivation", description: "Technical breakdown of the pre-harvest flushing process. Understanding how to force the plant to metabolize residual salts for a cleaner, smoother cure.", date: "Aug 2015" },
  { id: "VID-108", youtubeId: "mNvBOTKuyAo", title: "VaderVision - How to plant Cannabis Seeds", category: "Cultivation", description: "Back to basics with VaderVision. A step-by-step tutorial on seed germination, transplanting, and early root-zone establishment for optimal growth.", date: "Nov 2013" }
];