export interface SpeakingEvent {
  id: string;
  event: string;
  host: string;
  location: string;
  date: string;
  year: number;
  role: "Keynote Speaker" | "Lead Consultant Facilitator" | "Panel Chairman" | "Panellist" | "Guest Lecturer" | "Award Recipient";
  topic: string;
  isFeatured?: boolean;
  recordingUrl?: string;
  /** false = a draft entry that has not been confirmed with him; hidden on the Featured page. */
  confirmed?: boolean;
}

export const speakingTopics = [
  {
    title: "Strategic & Development Communication",
    description: "Designing communication systems for institutional trust, citizen participation, and national development across Africa.",
  },
  {
    title: "Artificial Intelligence & Media Ethics",
    description: "Navigating newsroom automation, generative AI ethics, deepfakes, and algorithmic literacy in higher education.",
  },
  {
    title: "Public Speaking & Executive Rhetoric",
    description: "The psychology of persuasive delivery, crisis speechcraft, and commanding civic and corporate podiums.",
  },
  {
    title: "Media & Information Literacy (MIL)",
    description: "Countering digital disinformation, political propaganda, and hate speech in African electoral cycles.",
  },
  {
    title: "Higher Education & Academic Leadership",
    description: "Benchmarking quality assurance, curricular reform, and mentorship frameworks for the next generation of scholars.",
  },
];

export const allSpeakingEvents: SpeakingEvent[] = [
  {
    id: "spk-1",
    event: "1st Africa Leadership Summit & Awards",
    host: "Global Skills Hub (UK)",
    location: "Accra, Ghana",
    date: "8 - 10 October 2026",
    year: 2026,
    role: "Award Recipient",
    topic: "Transformative Leadership & Strategic Communication in Africa",
    isFeatured: true,
  },
  {
    id: "spk-2",
    event: "EU-SDGN II Gubernatorial Election Media Training",
    host: "International Press Council (IPC) / European Union",
    location: "Ado-Ekiti, Nigeria",
    date: "14 April 2026",
    year: 2026,
    role: "Lead Consultant Facilitator",
    topic: "Electoral Journalism, Fact-Checking and Conflict-Sensitive Reporting",
    isFeatured: true,
  },
  {
    id: "spk-3",
    event: "NUC National Accreditation Exercise",
    host: "National Universities Commission / Chrisland University",
    location: "Abeokuta, Nigeria",
    date: "November 2025",
    year: 2025,
    role: "Panel Chairman",
    topic: "Mass Communication Curriculum Evaluation & Quality Standards",
    isFeatured: true,
  },
  {
    id: "spk-4",
    event: "National Media & AI Practitioners Forum",
    host: "Nigeria Association of Artificial Intelligence Practitioners",
    location: "Lagos, Nigeria",
    date: "July 2025",
    year: 2025,
    role: "Panellist",
    topic: "Ethical AI Adoption and Copyright Ambiguities in African Journalism",
    isFeatured: false,
    confirmed: false,
  },
  {
    id: "spk-5",
    event: "Bowen University Distinguished Alumni Public Lecture",
    host: "Bowen University Alumni Association",
    location: "Iwo, Nigeria",
    date: "November 2024",
    year: 2024,
    role: "Guest Lecturer",
    topic: "Building National Institutions Through Academic Excellence and Character",
    isFeatured: false,
    confirmed: false,
  },
  {
    id: "spk-6",
    event: "Annual Conference of the Association of Communication Scholars & Professionals of Nigeria",
    host: "ACSPN",
    location: "Abuja, Nigeria",
    date: "September 2023",
    year: 2023,
    role: "Panellist",
    topic: "Rethinking Media and Information Literacy for Digital Democracy",
    isFeatured: false,
    confirmed: false,
  },
];
