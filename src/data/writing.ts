export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  topic: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  isFeatured?: boolean;
}

export const articlesData: Article[] = [
  {
    slug: "generative-ai-in-nigerian-newsrooms",
    title: "Generative AI in Nigerian Newsrooms: Balancing Technological Speed with Journalistic Integrity",
    subtitle: "Why algorithmic efficiency must not replace investigative verification and human empathy.",
    topic: "AI & Media",
    date: "October 2026",
    readTime: "5 min read",
    isFeatured: true,
    excerpt:
      "As Nigerian newsrooms adopt generative AI to automate routine copy and social headlines, the challenge is not whether artificial intelligence will replace journalists, but whether our media institutions will retain the moral authority that commands public trust.",
    content: [
      "The rapid penetration of generative artificial intelligence across West African editorial desks has sparked an inevitable tension between technological velocity and ethical verification. In an economic climate characterized by strained newsroom budgets, the temptation to deploy automated summarization and algorithmic draft generation is acute.",
      "However, journalism in a developing democracy is not a mere content aggregation exercise; it is an act of civic stewardship. When an algorithm hallucinates a legal precedent or misinterprets an economic statistic, the casualty is not simply factual accuracy, but the fragile fabric of citizen trust in the fourth estate.",
      "What our communication curricula and newsrooms urgently require is not an outright rejection of artificial intelligence, but a rigorous framework for algorithmic transparency. Media organizations must establish clear attribution standards when AI assists research, enforce human-in-the-loop verification for every published claim, and invest in continuous prompt and verification literacy for their reporters.",
      "Technology must serve the human story, never supplant the conscience that verifies it.",
    ],
  },
  {
    slug: "why-i-stayed-manifesto",
    title: "Why I Stayed: A Manifesto for Nation-Building Through Higher Education",
    subtitle: "Reflections on eighteen years in the Nigerian university system and the decision to build here.",
    topic: "Reflections",
    date: "September 2026",
    readTime: "7 min read",
    isFeatured: false,
    excerpt:
      "A nation cannot outsource the training of its communicators. When seasoned scholars leave, who mentors the undergraduate discovering public speaking or the doctoral candidate interrogating media integrity?",
    content: [
      "Every academic in Nigeria over the last decade has confronted the persistent question of whether to seek foreign tenure. The incentives of predictable funding, modern laboratories, and international currency are undeniable. Yet, the choice to stay was for me an act of intentional national stewardship.",
      "In my eighteen years across Babcock, UNILAG, Bowen, and FUOYE, I have witnessed firsthand what happens when dedication meets young, raw ambition. The students we guide in our lecture rooms are the future editors, communications directors, and policymakers who will steer this country's narrative.",
      "Staying means being physically present when an accreditation panel reviews a young department. It means developing modules like 'Public Speaking Essentials' so our graduates stand shoulder-to-shoulder with alumni from Harvard or Oxford. It is quiet, relentless work, but it is the foundational work upon which national sovereignty truly rests.",
    ],
  },
  {
    slug: "rhetoric-as-leadership",
    title: "Rhetoric as Leadership: Why Every Emerging African Professional Must Master Public Speaking",
    subtitle: "The ability to articulate vision with clarity and conviction remains the ultimate multiplier of competence.",
    topic: "Public Speaking",
    date: "August 2026",
    readTime: "4 min read",
    isFeatured: false,
    excerpt:
      "Technical competence without communicative clarity leaves leadership in a vacuum. True influence begins when ideas are translated into compelling, ethical rhetoric.",
    content: [
      "Throughout my career evaluating students and advising corporate executives, I have observed a recurring tragedy: brilliant technical minds whose transformative ideas remain stillborn because they cannot command a room.",
      "Public speaking is not theatrics; it is the discipline of empathy, structure, and moral courage. It demands that the speaker understands the fears and aspirations of the audience, orders arguments with crystalline logic, and delivers them with unshakeable authenticity.",
      "In our 'Public Speaking Essentials' module, we teach students that executive poise is not an innate gift bestowed upon a lucky few; it is a deliberate craft that can be studied, practiced, and mastered.",
    ],
  },
  {
    slug: "revisiting-development-communication",
    title: "Revisiting Development Communication in Sub-Saharan Africa: Moving Beyond Top-Down Models",
    subtitle: "Why grassroots participatory communication succeeds where bureaucratic directives fail.",
    topic: "Development Comm",
    date: "June 2026",
    readTime: "6 min read",
    isFeatured: false,
    excerpt:
      "Development projects routinely flounder not for lack of capital, but for lack of participatory dialogue. We must retire top-down messaging and embrace community agency.",
    content: [
      "Decades after modernization theory held sway, many public sector campaigns in Africa still treat rural and marginalized communities as passive recipients of government enlightenment. History has proven that this approach breeds skepticism and disengagement.",
      "Development communication at its best is participatory. It requires that communities participate in framing the problem, selecting the communicative media—whether through town hall dialogues, community radio, or peer-to-peer storytelling—and evaluating the outcome.",
      "Until development planners understand that communication is dialogue rather than dissemination, national initiatives in public health, civic registration, and agricultural innovation will continue to struggle for lasting roots.",
    ],
  },
];
