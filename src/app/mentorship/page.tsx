import { redirect } from "next/navigation";

/** Master classes are a section of the Teaching page. */
export default function MentorshipPage() {
  redirect("/teaching#master-classes");
}
