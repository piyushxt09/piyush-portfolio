import type { Metadata } from "next";
import { Josefin_Sans, Lato } from "next/font/google";
import "./globals.css";

// Prevent FontAwesome icon flashing
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piyushxt09.vercel.app"),
  title: "Priyanshu Chauhan | Full Stack Web Developer - Portfolio",
  description:
    "Indian Full Stack Developer with 3-4 years experience in Angular 19, Next.js, React, Node.js, PHP, and MongoDB. Building enterprise CRMs, travel portals, and scalable web solutions.",
  keywords: [
    "Priyanshu Chauhan",
    "Piyush Solution",
    "Full Stack Developer",
    "Angular 19 Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "Travel CRM",
  ],
  authors: [{ name: "Priyanshu Chauhan" }],
  icons: {
    icon: "/assets/image/head.png",
    shortcut: "/assets/image/head.png",
    apple: "/assets/image/head.png",
  },
  openGraph: {
    title: "Priyanshu Chauhan | Full Stack Developer",
    description:
      "Full Stack Web Developer specializing in Angular 19, Next.js, Node.js, and modern web architecture.",
    type: "website",
    images: ["/assets/image/head.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${josefinSans.variable} ${lato.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[var(--background)] text-white min-h-screen selection:bg-[var(--light-purple-color)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
