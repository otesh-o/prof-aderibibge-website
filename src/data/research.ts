export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  type: "Journal Article" | "Conference Proceeding" | "Book Chapter" | "Policy Report";
  doiOrUrl?: string;
  scholarUrl?: string;
  abstract?: string;
}

export interface ResearchGrant {
  title: string;
  fundingBody: string;
  year: string;
  scope: string;
  role: string;
  description: string;
}

export interface ThesisData {
  title: string;
  degree: string;
  institution: string;
  year: number;
  summary: string;
  downloadUrl: string;
  keyContributions: string[];
}

export interface SupervisionTopic {
  level: "PhD" | "MSc";
  area: string;
  status: "Completed" | "In Progress";
  year: string;
}

export const thesisData: ThesisData = {
  title: "Strategic Communication Frameworks for Socio-Economic Transformation: An Empirical Analysis of Development Interventions in Southwest Nigeria",
  degree: "Doctor of Philosophy (PhD) in Communication and Media Studies",
  institution: "Babcock University, Ilishan-Remo",
  year: 2014,
  summary:
    "This doctoral research investigates the efficacy of participatory development communication models against traditional top-down dissemination paradigms. Through empirical evaluation of intervention programs, it articulates an indigenized strategic communication model emphasizing stakeholder agency, digital media channels, and community feedback loops.",
  downloadUrl: "/documents/Prof_Adebola_Aderibigbe_PhD_Thesis_Summary.pdf",
  keyContributions: [
    "Formulated an Indigenized Development Communication Index (IDCI) for Sub-Saharan African contexts.",
    "Demonstrated measurable gains in community adoption when development campaigns utilize participatory radio and mobile channels.",
    "Provided actionable policy recommendations for federal and state ministries of information and non-governmental actors.",
  ],
};

export const publicationsData: Publication[] = [
  {
    id: "pub-1",
    title: "Algorithmic Media and Public Discourse in Africa: Assessing Generative AI Adoption in Nigerian Newsrooms",
    authors: "Aderibigbe, A. A., & Collaborators",
    journal: "Frontiers in Psychology",
    year: 2025,
    type: "Journal Article",
    abstract: "Investigates editorial attitudes, perceived professional risks, and workflow augmentations following the adoption of large language models across mainstream Nigerian news establishments.",
  },
  {
    id: "pub-2",
    title: "Strategic Communication in Times of Socio-Economic Transition: Frameworks for Citizen Engagement",
    authors: "Aderibigbe, A. A.",
    journal: "Communication and the Public",
    year: 2024,
    type: "Journal Article",
    abstract: "Examines state-citizen communication deficits and advances a two-way symmetrical strategic communication model for public policy dissemination.",
  },
  {
    id: "pub-3",
    title: "Pan-African Media Integration and Continental Development Agendas: A Critical Assessment",
    authors: "Aderibigbe, A. A.",
    journal: "Journal of African Union Studies",
    year: 2023,
    type: "Journal Article",
    abstract: "Evaluates the representation and agenda-setting capacity of continental African media in advancing African Union Agenda 2063 goals.",
  },
  {
    id: "pub-4",
    title: "Media and Information Literacy as a Counter-Disinformation Strategy in Electoral Nigeria",
    authors: "Aderibigbe, A. A.",
    journal: "African Journalism Studies",
    year: 2022,
    type: "Journal Article",
    abstract: "Presents empirical results from youth digital media consumption audits, advocating for critical information literacy integration in high school and tertiary curricula.",
  },
  {
    id: "pub-5",
    title: "Curriculum Modernization in Nigerian Communication Education: Integrating AI and Emerging Tech",
    authors: "Aderibigbe, A. A.",
    journal: "ACSPN National Conference Proceedings",
    year: 2025,
    type: "Conference Proceeding",
    abstract: "Proposes modular updates to the CCMAS curriculum for Mass Communication departments to account for prompt engineering, computational journalism, and algorithmic ethics.",
  },
  {
    id: "pub-6",
    title: "Broadcast Management in the Streaming Era: Surviving Audience Fragmentation in Urban Nigeria",
    authors: "Aderibigbe, A. A.",
    journal: "Journal of Media and Cultural Studies",
    year: 2021,
    type: "Journal Article",
    abstract: "Analyzes commercial sustainability paradigms for radio and television networks contending with YouTube and social streaming shifts.",
  },
  {
    id: "pub-7",
    title: "Ethical Considerations in AI-Assisted Investigative Journalism: A Global South Perspective",
    authors: "Aderibigbe, A. A.",
    journal: "Handbook of Digital Media Ethics (Routledge)",
    year: 2024,
    type: "Book Chapter",
    abstract: "A book chapter examining surveillance risks, dataset biases, and copyright ambiguities in developing media ecosystems.",
  },
  {
    id: "pub-8",
    title: "Electoral Journalism and Conflict-Sensitive Reporting in State Gubernatorial Elections",
    authors: "Aderibigbe, A. A. for International Press Centre",
    journal: "EU-SDGN II Policy Monograph Series",
    year: 2026,
    type: "Policy Report",
    abstract: "A training monograph developed under EU-SDGN II providing practical guidelines for reporters on fake news mitigation and de-escalation rhetoric.",
  },
];

export const researchGrantsData: ResearchGrant[] = [
  {
    title: "Community Media Literacy and Grassroots Development Communication Project",
    fundingBody: "Ford Foundation",
    year: "Executed",
    scope: "National Field Research",
    role: "Principal Investigator / Project Lead",
    description: "Evaluated community radio interventions across underserved rural communities and established pedagogical modules for field practitioners.",
  },
  {
    title: "Broadcast Ethics and Youth Audience Media Consumption Audit",
    fundingBody: "Bowen University Research Grants Board",
    year: "Executed",
    scope: "Southwest Regional Study",
    role: "Lead Researcher",
    description: "Empirical study tracing the shift in undergraduate media consumption from traditional linear broadcast to peer-to-peer digital networks.",
  },
];

export const supervisionsData: SupervisionTopic[] = [
  {
    level: "PhD",
    area: "Generative AI, Disinformation, and Electoral Integrity in West Africa",
    status: "In Progress",
    year: "2024 - Present",
  },
  {
    level: "PhD",
    area: "Strategic Communication Frameworks in Public Health Crisis Response",
    status: "In Progress",
    year: "2023 - Present",
  },
  {
    level: "MSc",
    area: "Audience Trust in Algorithmic News Feeds Among Nigerian Digital Natives",
    status: "Completed",
    year: "2025",
  },
  {
    level: "MSc",
    area: "Social Media Advocacy and Policy Revisions in Climate Change Reporting",
    status: "Completed",
    year: "2024",
  },
];
