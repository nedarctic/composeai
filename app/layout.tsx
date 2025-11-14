import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "ScholarBrood - Academic Writing, Research & AI Skills Training",
  description: "ScholarBrood offers expert-led tutorials, mentorship, and AI & online skills training to help students and professionals excel in academic writing, research, and digital productivity.",
  keywords: [
    "academic writing",
    "research mentorship",
    "AI skills training",
    "online courses",
    "writing tutorials",
    "ScholarBrood",
    "academic guides",
    "digital skills"
  ],
  authors: [{ name: "ScholarBrood", url: "https://scholarbrood.com" }],
  openGraph: {
    title: "ScholarBrood - Academic Writing, Research & AI Skills Training",
    description: "Expert-led tutorials, mentorship, and AI skills training for students and professionals.",
    url: "https://scholarbrood.com",
    siteName: "ScholarBrood",
    type: "website",
    images: [
      {
        url: "https://scholarbrood.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScholarBrood - Academic Writing and Research"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarBrood - Academic Writing, Research & AI Skills Training",
    description: "Expert-led tutorials, mentorship, and AI skills training for students and professionals.",
    images: ["https://scholarbrood.com/og-image.png"],
    site: "@ScholarBrood"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className}`}>
      <body
        className={`${poppins.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
