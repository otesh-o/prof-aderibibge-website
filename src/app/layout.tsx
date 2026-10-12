import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NavigationDock from "@/components/NavigationDock";
import Footer from "@/components/Footer";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prof. Adebola Aderibigbe | Professor of Mass Communication, FUOYE",
  description:
    "Official academic and professional portal of Prof. Adebola Adewunmi Aderibigbe. Specialising in Strategic and Development Communication at Federal University Oye-Ekiti (FUOYE).",
  keywords: [
    "Adebola Aderibigbe",
    "Prof Aderibigbe",
    "FUOYE Mass Communication",
    "Strategic Communication Nigeria",
    "Development Communication",
    "Babcock University PhD",
    "African Leadership Award",
  ],
  authors: [{ name: "Prof. Adebola Adewunmi Aderibigbe" }],
  openGraph: {
    title: "Prof. Adebola Aderibigbe | Official Academic Portal",
    description:
      "Professor of Mass Communication, FUOYE. Building Nigeria's communicators, from Nigeria.",
    url: "https://adebolaaderibigbe.com",
    siteName: "Prof. Adebola Aderibigbe",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Prof. Adebola Adewunmi Aderibigbe",
    "alternateName": "Adebola Aderibigbe",
    "jobTitle": "Professor of Mass Communication",
    "worksFor": {
      "@type": "CollegeOrUniversity",
      "name": "Federal University Oye-Ekiti (FUOYE)",
      "sameAs": "https://fuoye.edu.ng",
    },
    "alumniOf": [
      { "@type": "CollegeOrUniversity", "name": "Babcock University" },
      { "@type": "CollegeOrUniversity", "name": "University of Lagos" },
      { "@type": "CollegeOrUniversity", "name": "Bowen University" },
    ],
    "url": "https://adebolaaderibigbe.com",
    "sameAs": [
      "https://scholar.google.com",
      "https://www.linkedin.com",
    ],
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0D0E12] text-[#E6E8EE] selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1 pb-24">{children}</main>
        <NavigationDock />
        <Footer />
      </body>
    </html>
  );
}
