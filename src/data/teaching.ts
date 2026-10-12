export interface CourseDetail {
  code: string;
  title: string;
  level: "Undergraduate" | "Postgraduate" | "Executive Module";
  semester: string;
  credits: number;
  description: string;
  outlineDownloadUrl?: string;
  topics: string[];
}

export interface FeaturedModule {
  code: string;
  title: string;
  subtitle: string;
  targetAudience: string;
  duration: string;
  description: string;
  corePillars: string[];
}

export interface LectureVideo {
  id: string;
  title: string;
  courseCode: string;
  courseTitle: string;
  duration: string;
  youtubeId: string;
  description: string;
  date: string;
}

export const featuredModulesData: FeaturedModule[] = [
  {
    code: "PSE 101",
    title: "Public Speaking Essentials",
    subtitle: "Rhetoric, Vocal Poise, and Persuasive Executive Delivery",
    targetAudience: "Undergraduate Scholars, Rising Executives & Media Practitioners",
    duration: "6 Weeks / Modular Intensive",
    description:
      "A flagship practical module conceived and developed by Prof. Aderibigbe to demystify stage fright, structure persuasive arguments, and master public discourse in civic and corporate arenas.",
    corePillars: [
      "Audience Psychology & Rhetorical Framing",
      "Vocal Variety, Microphonic Technique & Physical Stance",
      "Crisis Address & Impromptu Q&A Handling",
      "Ethics of Persuasion & Combating Fallacies",
    ],
  },
  {
    code: "PEL 201",
    title: "Principles of Excellent Living",
    subtitle: "Ethical Character, Vision Architecture, and Life Mastery",
    targetAudience: "University Scholars & Emerging Leaders",
    duration: "Full Semester / Leadership Practicum",
    description:
      "A transformative life-skills curriculum designed to instill character integrity, academic discipline, and purposeful vision in students as they transition to national leadership.",
    corePillars: [
      "Defining Personal Integrity & Professional Ethics",
      "Time Architecture & Goal Realization",
      "Resilience in Challenging Socio-Economic Contexts",
      "Mentorship, Legacy & Community Stewardship",
    ],
  },
];

export const universityCoursesData: CourseDetail[] = [
  {
    code: "MAC 309",
    title: "Broadcast Management & Programming",
    level: "Undergraduate",
    semester: "First Semester (300 Level)",
    credits: 3,
    description:
      "Examines the operational dynamics, regulatory compliances, program scheduling, and economic sustainability of radio and television stations in contemporary Nigeria.",
    outlineDownloadUrl: "/documents/MAC_309_Course_Outline.pdf",
    topics: [
      "Structure of Nigerian Broadcasting (NBC Guidelines)",
      "Station Programming Architecture & Dayparting Strategies",
      "Commercial Advertising Revenue & Rating Metrics",
      "Streaming Disruption and Digital Multi-platform Strategy",
    ],
  },
  {
    code: "MAC 412",
    title: "Strategic Communication Campaigns & Public Relations",
    level: "Undergraduate",
    semester: "Second Semester (400 Level)",
    credits: 3,
    description:
      "An advanced capstone course in crafting, executing, and evaluating multi-channel strategic campaigns for government, corporate, and civil society clients.",
    outlineDownloadUrl: "/documents/MAC_412_Course_Outline.pdf",
    topics: [
      "Formative Research & Stakeholder Mapping",
      "Campaign Messaging Matrix & Channel Selection",
      "Media Relations & Reputation Crisis Management",
      "Metrics, ROI & Qualitative Impact Evaluation",
    ],
  },
  {
    code: "MAC 805",
    title: "Advanced Development Communication Seminars",
    level: "Postgraduate",
    semester: "First Semester (MSc & PhD)",
    credits: 3,
    description:
      "Postgraduate doctoral and master's seminar interrogating modernization, dependency, participatory paradigms, and digital media's role in African transformation.",
    outlineDownloadUrl: "/documents/MAC_805_Course_Outline.pdf",
    topics: [
      "Genealogy of Development Communication Paradigms",
      "Participatory Action Research (PAR) Frameworks",
      "Health, Climate, and Agricultural Communication Interventions",
      "Critique of Donor-Driven Communication Frameworks",
    ],
  },
];

export const lectureVideosData: LectureVideo[] = [
  {
    id: "lec-1",
    title: "Strategic Communication in African Governance: Trust, Voice & Accountability",
    courseCode: "MAC 805",
    courseTitle: "Advanced Development Communication",
    duration: "34 mins",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID; lazy loaded
    description:
      "A lecture discussing how public institutions in Africa can migrate from propagandist PR to genuine participatory engagement that builds durable public trust.",
    date: "Semester Lecture Series",
  },
  {
    id: "lec-2",
    title: "Public Speaking Essentials: Mastering the First Sixty Seconds",
    courseCode: "PSE 101",
    courseTitle: "Public Speaking Essentials",
    duration: "22 mins",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "Techniques for establishing immediate rapport, commanding attention, and deploying hook structures during academic and professional presentations.",
    date: "Executive Masterclass",
  },
  {
    id: "lec-3",
    title: "Managing Broadcast Networks in the Age of Streaming Fragmentation",
    courseCode: "MAC 309",
    courseTitle: "Broadcast Management & Programming",
    duration: "41 mins",
    youtubeId: "dQw4w9WgXcQ",
    description:
      "Analytical breakdown of broadcast revenues, NBC regulation nuances, and audience migration to digital streaming channels.",
    date: "Faculty Lecture Series",
  },
];
