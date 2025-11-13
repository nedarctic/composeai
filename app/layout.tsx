import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { stackSans } from "./fonts";

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
    <html lang="en" className={stackSans.variable}>
      <body
        className="font-(--font-stack-sans antialiased"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
