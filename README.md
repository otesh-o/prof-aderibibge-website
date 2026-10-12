# Prof. Adebola Adewunmi Aderibigbe — Official Website

> **"Building Nigeria's communicators, from Nigeria."**  
> Official academic portal for Prof. Adebola Adewunmi Aderibigbe, Professor of Mass Communication, Faculty of Communication and Media Studies, Federal University Oye-Ekiti (FUOYE).

- **Domain**: [adebolaaderibigbe.com](https://adebolaaderibigbe.com)
- **Prepared by**: Bukunmi Otesile

---

## 🏛️ About the Professor

- **Role**: Professor of Mass Communication, Federal University Oye-Ekiti (FUOYE)
- **Specialisation**: Strategic and Development Communication
- **Leadership**: Director, Career Services Centre at FUOYE
- **Qualifications**: PhD (Babcock University, 2014), MSc (University of Lagos, 2011), BSc (Bowen University, 2006)
- **Distinctions**: Africa Leadership Award (2026), Peter Okebukola Distinction Prize (2024), Fellow of the Institute of Security of Nigeria (FISN), Fellow of the Institute of Corporate Administration (FCIA), NYSC Presidential Honours Award (2007)

---

## 🎨 Architectural & Design Decisions

1. **Dark Theme Palette**: Near-black (`#0B0F17`) background, dark slate tiles (`#111827`), off-white typography (`#E5E7EB`), and royal accent blue (`#3B82F6`).
2. **Floating Icon Dock Navigation**:
   - Fixed at the bottom center of the screen with acrylic glassmorphism (`backdrop-blur-xl bg-[#0F172A]/90`).
   - Keeps the page below the header free of cluttered menu bars.
   - On mobile, dynamically trims to top 5 icons + an intuitive "More" expander.
3. **Top Brand Header**: "Adebola Aderibigbe" positioned cleanly at the top-left with no distracting menu bar next to it, accompanied by a quick `⌘K` global search trigger and FUOYE affiliation badge.
4. **Bento Grid Architecture**: Non-generic, mixed-size tile layout presenting keynotes, lecture videos, research pillars, and flagship modules without monotonous scrolling.
5. **The "Why I Stayed" Manifesto**: Dedicated positioning narrative celebrating the decision to stay and invest in Nigerian higher education rather than "japa".
6. **Ultra-Fast & Mobile-First**: Built with static page pre-rendering and bandwidth-adaptive YouTube video streaming, optimized for Nigerian mobile networks.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── about/            # Biography, "Why I Stayed" manifesto, career timeline & CV
│   ├── credentials/      # Qualifications, awards, fellowships & NUC panels bento grid
│   ├── research/         # Research pillars, filterable publications list & thesis showcase
│   ├── teaching/         # Custom modules (PSE 101, PEL 201), syllabi & lecture video vault
│   ├── mentorship/       # Masterclasses, target audiences & interest registration
│   ├── speaking/         # Keynotes timeline, speaking themes & invitation requests
│   ├── writing/          # Essays, commentary & dynamic [slug] reading templates
│   ├── contact/          # Multi-route inquiry form & institutional office details
│   ├── layout.tsx        # Root layout, Header, Floating Dock, Footer & JSON-LD
│   ├── globals.css       # Tailwind v4 theme tokens & glassmorphism utilities
│   ├── sitemap.ts        # Next.js automatic dynamic sitemap generator
│   └── robots.ts         # Search engine crawler policies
├── components/
│   ├── Header.tsx        # Minimalist brand anchor & search trigger
│   ├── NavigationDock.tsx# Bottom floating glassmorphic dock
│   ├── Footer.tsx        # Institutional footer & academic links
│   ├── home/             # HeroSection, BentoGrid, WhyIStayedBand, QuoteSection
│   ├── research/         # PublicationsList (filterable)
│   ├── writing/          # ArticlesFilter (tag filters & search)
│   ├── contact/          # ContactForm (state management & prefill)
│   └── search/           # SearchModal (Cmd+K global search)
└── data/                 # Centralized type-safe content dictionaries
    ├── profile.ts        # Profile, statistics, positioning & quote
    ├── credentials.ts    # Career timeline & 6 credential categories
    ├── research.ts       # Publications, doctoral thesis, grants & supervisions
    ├── teaching.ts       # Courses, featured modules & lecture videos
    ├── speaking.ts       # Keynotes, events & speaking topics
    ├── mentorship.ts     # Masterclass offerings & deliverables
    └── writing.ts        # Full articles & thought leadership essays
```

---

## 🛠️ Development & Deployment

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Verify production build
npm run build
```

Deployed to Vercel and mapped to domain `adebolaaderibigbe.com`.
See [MAINTENANCE.md](MAINTENANCE.md) for how to add lectures, events, articles, and update quotes.
