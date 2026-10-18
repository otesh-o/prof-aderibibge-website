# Maintenance guide (for the developer)

How to update `adebolaaderibigbe.com`. All content lives in `src/data/`, separate from layout code.
Updates are made by the developer under the maintenance agreement: the professor sends material, you add it here.

Every change is: edit a data file or drop a file into `public/`, then push to `main`.
Vercel redeploys automatically. Run `npm run dev` first if you want to check it.

---

## Where things live

| What | File |
|---|---|
| Quote, bio line, fellowships, hero numbers, social links, email | `src/data/profile.ts` |
| Publications, thesis, grants, supervision | `src/data/research.ts` |
| Lecture videos, course outlines, modules | `src/data/teaching.ts` |
| Master classes | `src/data/mentorship.ts` |
| Featured engagements, speaking topics | `src/data/speaking.ts` |
| Articles | `src/data/writing.ts` |
| Gallery photos | `src/data/gallery.ts`, files in `public/images/gallery/` |
| Downloadable PDFs | `public/documents/` |
| Institution logos | `public/logos/` |
| Images and portrait | `public/images/` |

---

## Content that still needs his confirmation

These were drafted, not supplied by him. Do not publish them as fact until he approves.

- The quote and the "Why I stayed" wording (`profile.ts`, `app/about/page.tsx`).
- The publication titles, journals and abstracts in `research.ts`. Only Frontiers in Psychology,
  Communication and the Public, and the Journal of African Union Studies are named in his brief.
- Lecture titles, durations and course codes in `teaching.ts`. All three videos use a placeholder
  YouTube id (`dQw4w9WgXcQ`); the site refuses to play or link it and shows "Recording to be added".
- Course outline details (credits, descriptions, topics). Only MAC 309 is named in his brief.
- His MSc and BSc subject ("Mass Communication") on the About page.
- The portrait is a 400px placeholder. Replace after the photoshoot.

Entries marked `confirmed: false` are hidden everywhere (featured engagements, master classes).
Delete the flag, or set it to `true`, once he confirms an entry.

---

## 1. Quote and positioning

`src/data/profile.ts`: edit `quote.text` and `positioningLine`.

## 2. A featured engagement

`src/data/speaking.ts`, add to `allSpeakingEvents`:

```ts
{
  id: "spk-new",
  event: "Event name",
  host: "Organising body",
  location: "City, Country",
  date: "8 - 10 October 2026",
  year: 2026,
  role: "Keynote Speaker", // "Resource Person" | "Panel Chairman" | "Panellist" | "Guest Lecturer" | "Award Recipient"
  topic: "Talk title or theme",
  isFeatured: true, // the featured one shows in the strip on the home page
  recordingUrl: "https://youtube.com/watch?v=...", // optional
}
```

The Featured page (`/featured`) and the home strip update by themselves.

## 3. A lecture video

Upload to his YouTube channel, copy the id from `watch?v=ID`, then add to `lectureVideosData`
in `src/data/teaching.ts`:

```ts
{ id: "lec-new", title: "...", courseCode: "MAC 309", courseTitle: "...", duration: "35 mins",
  youtubeId: "ID", description: "...", date: "October 2026" }
```

The video loads only when a visitor presses play.

## 4. A publication

`src/data/research.ts`, add to `publicationsData`:

```ts
{ id: "pub-new", title: "...", authors: "Aderibigbe, A. A.", journal: "...", year: 2026,
  type: "Journal Article", // "Conference Proceeding" | "Book Chapter" | "Policy Report"
  scholarUrl: "https://scholar.google.com/...", abstract: "..." }
```

The newest journal article becomes the featured paper on the home page automatically.

## 5. An article

`src/data/writing.ts`, add to `articlesData` (`isFeatured: true` leads the home section).
Each article gets a page at `/writing/<slug>` and appears in the sitemap and search.

## 6. A course outline PDF

1. Put the PDF in `public/documents/`.
2. Set `outlineDownloadUrl: "/documents/<file>.pdf"` on the course in `universityCoursesData`.

The download button appears only when that file really exists; otherwise the page says
"Outline to be added".

## 7. The thesis summary

Save the PDF as `public/documents/Prof_Adebola_Aderibigbe_PhD_Thesis_Summary.pdf`.
The download buttons on the home page and `/research` switch on by themselves.

## 8. The CV

Replace `public/documents/Prof_Adebola_Aderibigbe_CV.pdf`, keeping the filename.

## 9. The portrait

Put the file in `public/images/`, then change the `src` in `src/components/home/HeroSection.tsx`.
Recommended: about 1200 x 1500 px. The crop is `object-[50%_20%]`; adjust if the face sits low.

## 10. Gallery photos

Put each photo in `public/images/gallery/`, then add an entry to `galleryItems` in
`src/data/gallery.ts` (the file has a ready-to-copy example). `category` is `Portrait`, `Event`,
`Lecture` or `Award`; give the pixel `width` and `height`; write a real `alt` description.
Set `confirmed: false` to hold back a photo until he has cleared it. Resize to about 1600px on the
long edge and export as WebP or JPEG first so the page stays quick. `/gallery` shows an empty state
until the first photo is added.

## 11. An institution logo

Add a PNG or WebP to `public/logos/`, then add the entry to the timeline in
`src/components/home/CareerTimelineSection.tsx` (home) and `src/app/about/page.tsx` (`timeline`).
Entries without a logo show a short text mark.

---

## Contact form

`/contact` posts to `/api/contact`. Set `CONTACT_FORWARD_URL` in the Vercel project settings to an
endpoint that emails him (a Formspree or Basin form URL works). Until it is set the form falls back
to opening the visitor's own email app, so messages are never lost silently, but nothing is delivered
by the site itself.

## Pages and redirects

- `/featured` is the old speaking page. `/speaking` redirects to it.
- `/credentials` redirects to the About timeline. `/mentorship` redirects to the master classes
  section of `/teaching`.
- The floating dock follows the home page sections: `experience`, `research`, `lectures`,
  `articles`, `featured`. Keep those `id`s if you move sections around.

## Theme

The site is fixed on the light paper theme with dark bands (`data-theme="light"` in
`src/app/layout.tsx`). The dark palette is still defined in `src/app/globals.css`.

## Publishing

Pushing to `main` on `https://github.com/otesh-o/prof-aderibibge-website.git` triggers a Vercel
deployment to `adebolaaderibigbe.com`. Run `npx tsc --noEmit` and `npm run build` before pushing.
