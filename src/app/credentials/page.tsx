import { redirect } from "next/navigation";

/** The credentials live in the chronological record on the About page. */
export default function CredentialsPage() {
  redirect("/about#timeline");
}
