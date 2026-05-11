export type Video = {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  description: string;
  date: string;
};

export const VIDEO_DB: Video[] = [
  { id: "VID-001", youtubeId: "hrcSQ3CDxhA", title: "VaderOG: Origins & Breeding Philosophy", category: "Interviews", description: "VaderOG discusses his roots in the California medical scene, his hybridization protocols, and the origins of Ocean Grown Seeds.", date: "2019-01-12" },
  { id: "VID-002", youtubeId: "lfRdrplSfBs", title: "Witch Hunt Harvest & Review", category: "Grow Logs", description: "A detailed look at a Witch Hunt harvest. Exploring the terpene profiles, resin production, and overall bag appeal after a 600w run.", date: "2014-02-10" },
  { id: "VID-003", youtubeId: "1-XhO_XUf1U", title: "Alien Rift Pheno Hunt: Episode 1", category: "Strain Reviews", description: "The beginning of the legendary Alien Rift pheno hunt. Searching for the perfect resin-heavy male stud for future hybridization.", date: "2020-05-14" },
  { id: "VID-004", youtubeId: "R1WwL4-00y4", title: "Living Soil vs. Synthetic Nutrients", category: "Cultivation", description: "VaderOG breaks down the differences in organoleptic expression and overall yield when comparing organic living soil to sterile hydro setups.", date: "2021-11-22" },
  { id: "VID-005", youtubeId: "Y8Z2j0QpWqw", title: "Vader OG: The Flagship Cut", category: "Strain Reviews", description: "An in-depth review of the flagship Vader OG cultivar. Tracing the lineage from Ocean Grown Kush to the modern stabilized seed line.", date: "2018-04-10" },
  { id: "VID-006", youtubeId: "p5bN13cZ3Wc", title: "Canopy Management & Defoliation", category: "Cultivation", description: "A masterclass on breaking apical dominance, strategic defoliation, and trellising techniques to maximize photon penetration and yield.", date: "2022-08-30" },
];
