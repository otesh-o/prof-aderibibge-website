export interface MasterClass {
  id: string;
  title: string;
  format: "Live Intensive" | "Virtual Masterclass" | "Recorded Session";
  audience: string;
  status: "Open for Registration" | "Cohort in Progress" | "Watch Recording";
  date: string;
  description: string;
  deliverables: string[];
  recordingUrl?: string;
}

export const masterClassesData: MasterClass[] = [
  {
    id: "mc-1",
    title: "Public Speaking Essentials Master Class",
    format: "Live Intensive",
    audience: "Undergraduate Scholars, Rising Executives & Media Practitioners",
    status: "Open for Registration",
    date: "Upcoming (November 2026)",
    description:
      "A hands-on rhetoric clinic guiding participants through stage presence, vocal range, speech structuring, and handling high-stakes question-and-answer sessions.",
    deliverables: [
      "Personal speech assessment & feedback from Prof. Aderibigbe",
      "Executive public speaking framework toolkit",
      "Certificate of Participation upon completion",
    ],
  },
  {
    id: "mc-2",
    title: "Principles of Excellent Living Masterclass",
    format: "Virtual Masterclass",
    audience: "Young Professionals & University Students",
    status: "Cohort in Progress",
    date: "Current Cohort (Q4 2026)",
    description:
      "A mentorship immersion focusing on personal character, ethical anchor points, vision articulation, and strategic resilience in competitive environments.",
    deliverables: [
      "Weekly guided reflections and leadership exercises",
      "Direct group Q&A sessions with Prof. Aderibigbe",
      "Peer accountability network",
    ],
  },
  {
    id: "mc-3",
    title: "Postgraduate Academic Writing & Thesis Defense Clinic",
    format: "Recorded Session",
    audience: "MSc and PhD Scholars in Communication and Social Sciences",
    status: "Watch Recording",
    date: "Recorded Session (2025)",
    description:
      "A masterclass breaking down the art of doctoral writing, theoretical framework selection, defending before external examiners, and publishing in reputable journals.",
    deliverables: [
      "Full video recording access (2.5 hours)",
      "Thesis defense checklist & sample presentation decks",
      "Guide to journal indexing (Scopus, Web of Science)",
    ],
    recordingUrl: "https://youtube.com",
  },
];
