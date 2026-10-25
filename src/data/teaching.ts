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
    id: "idea-tv-innovation-ep2",
    title: "Innovation Actors and Actions in Africa, Episode 2",
    courseCode: "TV",
    courseTitle: "IDEA TV",
    duration: "Full episode",
    youtubeId: "VbnCitTpkWA",
    description: "Television programme from IDEA TV on innovation and the people driving it across Africa.",
    date: "12 October 2026",
  },
];
