export interface TimelineEvent {
  year: string;
  role: string;
  institution: string;
  description: string;
  tag: string;
}

export interface CredentialCategory {
  title: string;
  subtitle: string;
  iconName: string;
  items: {
    primary: string;
    secondary: string;
    meta?: string;
    description?: string;
  }[];
}

export const careerTimeline: TimelineEvent[] = [
  {
    year: "2026",
    role: "Africa Leadership Award & Lead Consultant Facilitator",
    institution: "Global Skills Hub (UK) & International Press Council / EU-SDGN II",
    description: "Conferred Africa Leadership Award in Accra. Spearheaded media training for Ekiti gubernatorial election reporting.",
    tag: "Award & Service",
  },
  {
    year: "2025",
    role: "Chairman, NUC Ad-hoc Accreditation Panel",
    institution: "National Universities Commission / Chrisland University",
    description: "Chaired national accreditation exercise evaluating mass communication academic curriculum, facilities, and staff standards.",
    tag: "Quality Assurance",
  },
  {
    year: "2024",
    role: "Peter Okebukola Distinction Prize Recipient",
    institution: "Distinguished Academic Recognition",
    description: "Honoured for scholarly distinction and contribution to communication education in Nigeria.",
    tag: "Distinction",
  },
  {
    year: "2020 – Present",
    role: "Director, Career Services Centre",
    institution: "Federal University Oye-Ekiti (FUOYE)",
    description: "Directing university-wide career guidance, professional skills acquisition, and industry transition for students.",
    tag: "Leadership",
  },
  {
    year: "2018",
    role: "Fellow (FISN)",
    institution: "Institute of Security of Nigeria",
    description: "Elected Fellow for work at the intersection of strategic communication, national cohesion, and security discourse.",
    tag: "Fellowship",
  },
  {
    year: "2017",
    role: "Distinguished Alumni Award",
    institution: "Bowen University, Iwo",
    description: "Recognised by alma mater for exemplary career trajectory and dedication to academic mentorship.",
    tag: "Alumni Honour",
  },
  {
    year: "2014",
    role: "Doctor of Philosophy (PhD) in Communication and Media Studies",
    institution: "Babcock University, Ilishan-Remo",
    description: "Doctoral dissertation on development communication paradigms, public sphere engagement, and media policy.",
    tag: "Qualification",
  },
  {
    year: "2011",
    role: "Master of Science (MSc) in Mass Communication",
    institution: "University of Lagos (UNILAG)",
    description: "Advanced research in mass communication theories, broadcasting systems, and strategic messaging.",
    tag: "Qualification",
  },
  {
    year: "2007",
    role: "NYSC Presidential Honours Award",
    institution: "The Presidency, Federal Republic of Nigeria",
    description: "Conferred by the President of Nigeria for exceptional national youth service and community impact.",
    tag: "National Honour",
  },
  {
    year: "2006",
    role: "Bachelor of Science (BSc) in Mass Communication",
    institution: "Bowen University, Iwo",
    description: "Graduated with top academic honours, laying the foundation for an 18+ year academic career.",
    tag: "Qualification",
  },
];

export const credentialsCategories: CredentialCategory[] = [
  {
    title: "Academic Qualifications",
    subtitle: "Formal degrees and postgraduate education",
    iconName: "GraduationCap",
    items: [
      {
        primary: "PhD in Communication and Media Studies",
        secondary: "Babcock University, Ilishan-Remo, Nigeria",
        meta: "2014",
        description: "Specialisation in Strategic and Development Communication.",
      },
      {
        primary: "MSc in Mass Communication",
        secondary: "University of Lagos (UNILAG), Nigeria",
        meta: "2011",
        description: "Focus on media policy, broadcast management, and communication theory.",
      },
      {
        primary: "BSc in Mass Communication",
        secondary: "Bowen University, Iwo, Nigeria",
        meta: "2006",
        description: "Foundational scholarship across print, broadcast, and public relations.",
      },
    ],
  },
  {
    title: "Awards & Recognitions",
    subtitle: "National and international academic honours",
    iconName: "Award",
    items: [
      {
        primary: "Africa Leadership Award",
        secondary: "Global Skills Hub (UK), 1st Africa Leadership Summit, Accra, Ghana",
        meta: "2026",
        description: "Recognised for leadership in African communication studies and academic capacity building.",
      },
      {
        primary: "Peter Okebukola Distinction Prize",
        secondary: "Academic Distinction in Higher Education",
        meta: "2024",
        description: "Conferred for excellence in university pedagogy, curriculum development, and research output.",
      },
      {
        primary: "Bowen Distinguished Alumni Award",
        secondary: "Bowen University Alumni Association",
        meta: "2017",
        description: "Honouring exemplary contributions to higher education and university leadership.",
      },
      {
        primary: "NYSC Presidential Honours Award",
        secondary: "The Presidency, Federal Republic of Nigeria",
        meta: "2007",
        description: "One of Nigeria's highest national youth service distinctions for community transformation.",
      },
    ],
  },
  {
    title: "Fellowships & Professional Memberships",
    subtitle: "Statutory bodies and scholarly associations",
    iconName: "ShieldCheck",
    items: [
      {
        primary: "Fellow (FISN)",
        secondary: "Institute of Security of Nigeria",
        meta: "2018",
        description: "Recognised for contributions to security communication, conflict resolution, and information integrity.",
      },
      {
        primary: "Fellow (FCIA)",
        secondary: "Institute of Corporate Administration",
        meta: "Fellow",
        description: "Honoured for excellence in administrative leadership, university governance, and career center directorship.",
      },
      {
        primary: "Charter Member",
        secondary: "Nigeria Association of Artificial Intelligence Practitioners",
        meta: "Charter",
        description: "Active contributor to national policy discourse on ethical AI in media and communication education.",
      },
      {
        primary: "Member",
        secondary: "Association of Communication Scholars & Professionals of Nigeria (ACSPN)",
        meta: "Member",
        description: "Participating in national communication curriculum enhancement and scholarly conferences.",
      },
    ],
  },
  {
    title: "Accreditation Panels & External Examination",
    subtitle: "Benchmarking quality assurance across Nigerian universities",
    iconName: "CheckCircle",
    items: [
      {
        primary: "Chairman, NUC Ad-hoc Accreditation Panel",
        secondary: "Mass Communication Programme, Chrisland University",
        meta: "November 2025",
        description: "Appointed by the National Universities Commission to lead evaluation of curriculum, lab infrastructure, and academic faculty.",
      },
      {
        primary: "External Examiner (Postgraduate & Undergraduate)",
        secondary: "Over 10 Nigerian Universities",
        meta: "Ongoing",
        description: "Serving as external examiner for MSc dissertations, PhD theses, and final-year undergraduate defenses across federal, state, and private universities.",
      },
      {
        primary: "Curriculum Advisory Panels",
        secondary: "Communication & Media Studies Departments",
        meta: "Continuous",
        description: "Developing modern course outlines aligned with CCMAS standards for digital journalism and strategic communication.",
      },
    ],
  },
  {
    title: "Consultancies & Grants Executed",
    subtitle: "Development sector projects and international grants",
    iconName: "Briefcase",
    items: [
      {
        primary: "Lead Consultant Facilitator — EU-SDGN II",
        secondary: "International Press Council (IPC) & European Union",
        meta: "April 2026",
        description: "Conducted intensive masterclasses for journalists in Ekiti State on ethical coverage and conflict-sensitive reporting for gubernatorial elections.",
      },
      {
        primary: "Grant Recipient & Project Lead",
        secondary: "Ford Foundation Research Initiative",
        meta: "Executed",
        description: "Conducted field research examining media literacy, community development communication, and public interest discourse.",
      },
      {
        primary: "Institutional Research Grant",
        secondary: "Bowen University Research Grants Committee",
        meta: "Executed",
        description: "Investigated broadcast management ethics and media consumption patterns in emerging markets.",
      },
    ],
  },
  {
    title: "University Leadership Roles",
    subtitle: "Administrative stewardship at Federal University Oye-Ekiti",
    iconName: "Landmark",
    items: [
      {
        primary: "Director, Career Services Centre",
        secondary: "Federal University Oye-Ekiti (FUOYE)",
        meta: "Director",
        description: "Leading strategic university partnerships, employability programs, and career placement services.",
      },
      {
        primary: "Departmental & Faculty Committees",
        secondary: "Faculty of Communication and Media Studies, FUOYE",
        meta: "Various",
        description: "Serving across postgraduate boards, examination committees, and curriculum restructuring task forces.",
      },
    ],
  },
];
