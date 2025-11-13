import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { poppins } from "./fonts";

export const metadata: Metadata = {
  title: "ComposeAI - AI-Powered Content Creation",
  description: "Online courses to master AI-assisted content writing with ComposeAI.",
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
