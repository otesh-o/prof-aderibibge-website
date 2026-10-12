export interface HeadlineStat {
  value: string;
  label: string;
  description?: string;
}

export interface SpeakingEngagement {
  event: string;
  host: string;
  location: string;
  year: string;
  role: string;
  topic?: string;
  featured?: boolean;
}

export interface ResearchInterest {
  title: string;
  description: string;
  tag: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  year: string;
  location?: string;
}

export interface CourseHighlight {
  code: string;
  title: string;
  level: string;
  semester?: string;
  isCustomModule?: boolean;
}

export interface ArticlePreview {
  title: string;
  topic: string;
  date: string;
  readTime: string;
  slug: string;
}

export const profileData = {
  name: "Prof. Adebola Adewunmi Aderibigbe",
  shortName: "Adebola Aderibigbe",
  title: "Professor of Mass Communication",
  faculty: "Faculty of Communication and Media Studies",
  university: "Federal University Oye-Ekiti (FUOYE)",
  specialisation: "Strategic and Development Communication",
  positioningLine: "Building Nigeria's communicators, from Nigeria.",
  shortBio:
    "Over eighteen years of academic and field excellence across mass communication, strategic and development communication, media studies, and emerging technology discourse. Dedicated to educating the next generation of communicators and shaping national media practice.",
  whyIStayedExcerpt:
    "The pull of 'japa' has touched every department in Nigerian academia. But when I look at the MSc and PhD scholars we mentor, the curriculum panels we lead, and the national media institutions we advise, the conviction becomes absolute: building this country requires communicators trained right here, with global excellence and local commitment.",
  heroStats: [
    { value: "18+", label: "Years Experience", description: "In academia, strategic communication & media discourse" },
    { value: "30+", label: "University Courses", description: "Taught and developed across undergraduate & postgraduate" },
    { value: "10+", label: "Universities Served", description: "As External Examiner & NUC accreditation chair" },
    { value: "2+", label: "PhD Scholars", description: "Currently supervised, alongside dozens of MSc students" },
  ] as HeadlineStat[],

  socialLinks: {
    googleScholar: "https://scholar.google.com",
    linkedIn: "https://www.linkedin.com",
    fuoyeStaffProfile: "https://fuoye.edu.ng",
    email: "adebola.aderibigbe@fuoye.edu.ng",
  },

  speakingHighlights: [
    {
      event: "1st Africa Leadership Summit & Awards",
      host: "Global Skills Hub (UK)",
      location: "Accra, Ghana",
      year: "2026",
      role: "Keynote Speaker & Awardee",
      topic: "Transformative Leadership & Strategic Communication in Africa",
      featured: true,
    },
    {
      event: "EU-SDGN II Journalist Preparedness Program",
      host: "International Press Council (IPC) / EU",
      location: "Ado-Ekiti, Nigeria",
      year: "2026",
      role: "Lead Consultant Facilitator",
      topic: "Electoral Reporting & Media Integrity for the 2026 Gubernatorial Polls",
      featured: true,
    },
    {
      event: "NUC Ad-hoc Accreditation Panel",
      host: "National Universities Commission",
      location: "Chrisland University",
      year: "2025",
      role: "Panel Chairman",
      topic: "Mass Communication Academic Standards Review",
      featured: true,
    },
    {
      event: "National Media & AI Practitioners Forum",
      host: "Nigeria Association of AI Practitioners",
      location: "Lagos, Nigeria",
      year: "2025",
      role: "Charter Speaker & Panellist",
      topic: "Ethical AI Implementation in African Mass Media",
      featured: false,
    },
  ] as SpeakingEngagement[],

  researchInterests: [
    {
      title: "Strategic & Development Communication",
      description: "Examining communication frameworks for socio-economic transformation, citizen engagement, and governance in Sub-Saharan Africa.",
      tag: "Core Specialisation",
    },
    {
      title: "Artificial Intelligence & Communication",
      description: "Charter discourse on algorithmic media, generative AI ethics, newsroom automation, and AI literacy across Nigerian higher education.",
      tag: "Emerging Tech",
    },
    {
      title: "Media & Information Literacy (MIL)",
      description: "Developing counter-disinformation strategies, digital citizenship, and critical media consumption curricula for students and journalists.",
      tag: "Curriculum",
    },
  ] as ResearchInterest[],

  awards: [
    {
      title: "Africa Leadership Award",
      organization: "Global Skills Hub (UK)",
      year: "2026",
      location: "Accra, Ghana",
    },
    {
      title: "Peter Okebukola Distinction Prize",
      organization: "Academic Excellence Foundation",
      year: "2024",
      location: "Nigeria",
    },
    {
      title: "Distinguished Alumni Award",
      organization: "Bowen University",
      year: "2017",
      location: "Iwo, Nigeria",
    },
    {
      title: "NYSC Presidential Honours Award",
      organization: "The Presidency, Federal Republic of Nigeria",
      year: "2007",
      location: "Abuja",
    },
  ] as AwardItem[],

  courses: [
    {
      code: "MAC 309",
      title: "Broadcast Management & Programming",
      level: "Undergraduate",
      semester: "First Semester",
      isCustomModule: false,
    },
    {
      code: "PSE 101",
      title: "Public Speaking Essentials",
      level: "Executive & University Module",
      isCustomModule: true,
    },
    {
      code: "PEL 201",
      title: "Principles of Excellent Living",
      level: "Life Skills & Mentorship Module",
      isCustomModule: true,
    },
  ] as CourseHighlight[],

  latestWriting: [
    {
      title: "Generative AI in Nigerian Newsrooms: Balancing Technological Speed with Journalistic Integrity",
      topic: "AI & Media",
      date: "October 2026",
      readTime: "5 min read",
      slug: "generative-ai-in-nigerian-newsrooms",
    },
    {
      title: "Why I Stayed: A Manifesto for Nation-Building Through Higher Education",
      topic: "Reflections",
      date: "September 2026",
      readTime: "7 min read",
      slug: "why-i-stayed-manifesto",
    },
  ] as ArticlePreview[],

  quote: {
    text: "Communication is not merely an exchange of information; it is the architecture through which a nation defines its future, preserves its integrity, and empowers its people.",
    author: "Prof. Adebola Adewunmi Aderibigbe",
    subtext: "Professor of Mass Communication, Federal University Oye-Ekiti",
  },
};
