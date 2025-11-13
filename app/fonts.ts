import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const stackSans = localFont({
  src: "../public/fonts/stack-sans-headline/StackSansHeadline-VariableFont_wght.ttf",
  variable: "--font-stack-sans",
  weight: "100 900",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});