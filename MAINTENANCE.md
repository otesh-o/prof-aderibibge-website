# Prof. Adebola Aderibigbe Personal Website — Maintenance & Content Guide

This guide explains how Prof. Adebola Aderibigbe or the site administrator can update and maintain the website at `adebolaaderibigbe.com` without needing a developer for day-to-day changes.

All content is cleanly separated from code inside the `src/data/` directory.

---

## 1. Updating the Quote & Positioning Statement
- **File**: `src/data/profile.ts`
- **To update the Quote**: Locate `quote` at the bottom of `profile.ts`:
  ```typescript
  quote: {
    text: "Your approved quote goes here...",
    author: "Prof. Adebola Adewunmi Aderibigbe",
    subtext: "Professor of Mass Communication, Federal University Oye-Ekiti",
  }
  ```
- **To update the Positioning Line**: Update `positioningLine` in `src/data/profile.ts`.

---

## 2. Adding a New Speaking Engagement
- **File**: `src/data/speaking.ts`
- **Instructions**: Add a new entry to the `allSpeakingEvents` array at the top:
  ```typescript
  {
    id: "spk-new",
    event: "Event Name",
    host: "Organising Body",
    location: "City, Country",
    date: "Date String",
    year: 2026,
    role: "Keynote Speaker", // or "Lead Consultant Facilitator", "Panellist", "Guest Lecturer"
    topic: "Speech Title or Theme",
    isFeatured: true, // true to display as large featured tile
  }
  ```

---

## 3. Adding a New Lecture Video
- **File**: `src/data/teaching.ts`
- **Instructions**:
  1. Upload the video to Prof. Aderibigbe's YouTube channel.
  2. Copy the YouTube Video ID (e.g. from `https://www.youtube.com/watch?v=VIDEO_ID`).
  3. Add an entry to `lectureVideosData`:
  ```typescript
  {
    id: "lec-new",
    title: "Lecture Title",
    courseCode: "MAC 309",
    courseTitle: "Broadcast Management & Programming",
    duration: "35 mins",
    youtubeId: "VIDEO_ID",
    description: "Brief overview of what this lecture covers.",
    date: "October 2026",
  }
  ```

---

## 4. Adding a New Publication
- **File**: `src/data/research.ts`
- **Instructions**: Add a new object to `publicationsData`:
  ```typescript
  {
    id: "pub-new",
    title: "Paper Title",
    authors: "Aderibigbe, A. A., & Collaborator",
    journal: "Journal Name",
    year: 2026,
    type: "Journal Article", // or "Conference Proceeding", "Book Chapter", "Policy Report"
    scholarUrl: "https://scholar.google.com/...",
    abstract: "Short abstract of the paper...",
  }
  ```

---

## 5. Adding a New Essay or Reflection
- **File**: `src/data/writing.ts`
- **Instructions**: Add a new entry to `articlesData`:
  ```typescript
  {
    slug: "my-article-slug",
    title: "Article Title",
    subtitle: "One sentence summary",
    topic: "AI & Media",
    date: "November 2026",
    readTime: "5 min read",
    isFeatured: false,
    excerpt: "Short summary shown on cards...",
    content: [
      "First paragraph of the essay...",
      "Second paragraph...",
    ],
  }
  ```
The new article will immediately get its own dedicated page at `/writing/my-article-slug`.

---

## 6. Updating the Portrait Photo (After the Photoshoot)
1. Export the chosen portrait in high resolution (recommended: 1200 x 1500px, WebP or JPEG).
2. Save it into the `public/images/` folder as `portrait.jpg`.
3. In `src/components/home/HeroSection.tsx`, update the image container to render `<Image src="/images/portrait.jpg" alt="Prof. Adebola Aderibigbe" fill priority className="object-cover" />`.

---

## 7. Uploading Documents (CV, Thesis, Course Outlines)
- All downloadable PDFs are stored in `public/documents/`.
- To update the CV, replace `public/documents/Prof_Adebola_Aderibigbe_CV.pdf` with the new file using the same filename.

---

## 8. Publishing Changes
Any commit pushed to the `main` branch of `https://github.com/otesh-o/prof-aderibibge-website.git` automatically triggers a zero-downtime deployment on Vercel to `adebolaaderibigbe.com`.
