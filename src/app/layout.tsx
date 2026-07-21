import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Menahil Faiz | Full Stack Developer & AI Developer",
  description:
    "Premium portfolio of Menahil Faiz — Software Engineering Student, Full Stack Developer, AI Developer, and Digital Marketer based in Karachi, Pakistan. Building cutting-edge web applications with modern technologies.",
  keywords: [
    "Menahil Faiz",
    "Full Stack Developer",
    "AI Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Karachi",
    "Pakistan",
    "Web Developer",
    "Digital Marketer",
  ],
  authors: [{ name: "Menahil Faiz" }],
  creator: "Menahil Faiz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://menadev.vercel.app",
    siteName: "Menahil Faiz Portfolio",
    title: "Menahil Faiz | Full Stack Developer & AI Developer",
    description:
      "Building premium digital experiences with cutting-edge technology and beautiful design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Menahil Faiz Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menahil Faiz | Full Stack Developer & AI Developer",
    description:
      "Building premium digital experiences with cutting-edge technology and beautiful design.",
    images: ["/og-image.png"],
    creator: "@menadev9",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className="min-h-full bg-bg-primary text-text-primary font-body"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
      </body>
    </html>
  );
}

