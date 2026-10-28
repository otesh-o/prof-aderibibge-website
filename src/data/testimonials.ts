export interface Testimonial {
  id: string;
  /** What they said, word for word. Light typo fixes are fine; never reword. */
  quote: string;
  /** Name as the person gave it, or as shown on the post. */
  author: string;
  /** Who they are or where it was said, for example "FUOYE student" or "Comment on a TikTok video". */
  context: string;
  /** Link to the original post, if it came from social media. */
  sourceUrl?: string;
  year?: number;
  /** false = not cleared for publishing yet; hidden on the site. */
  confirmed?: boolean;
}

/**
 * What students, colleagues and organisers say about him. Add one object per testimony; the home
 * section updates by itself. Ask the person before using their name when it did not come to us as
 * a message meant for this site.
 *
 *   {
 *     id: "name-2026",
 *     quote: "…",
 *     author: "Full name",
 *     context: "FUOYE graduate",
 *   },
 */
export const testimonialsData: Testimonial[] = [
  {
    id: "tiktok-career-programme-1",
    quote: "I love his zeal towards FUOYE students.",
    author: "bidemioyelaran",
    context: "Creator of the FUOYE Maiden Career Programme video on TikTok",
    year: 2026,
  },
];
