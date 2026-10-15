import { redirect } from "next/navigation";

/** Speaking is now the Featured page. */
export default function SpeakingPage() {
  redirect("/featured");
}
