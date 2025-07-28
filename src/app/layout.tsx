import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "F1 Points Simulator - Race, Simulate & Track Standings",
  description:
    "Simulate Formula 1 race results, assign points, and track driver standings dynamically with this interactive Next.js app.",
  keywords: [
    "Formula 1",
    "F1",
    "Race Simulator",
    "Points Calculator",
    "Next.js",
    "React",
    "Motorsport",
    "F1 2025 Season",
    "Standings",
    "F1 Drivers",
  ],
  authors: [{ name: "Yefee", url: "https://github.com/Yefee8" }, { name: "Agora", url: "https://github.com/yigitfindikli" }],
  openGraph: {
    title: "F1 Points Simulator",
    description:
      "Simulate Formula 1 race results, assign points, and track driver standings dynamically.",
    url: "https://f1-points-simulator.vercel.app",
    images: [
      {
        url: "https://f1-points-simulator.vercel.app/og-image.png",
        width: 1920,
        height: 1080,
        alt: "F1 Points Simulator Open Graph Image",
      },
    ],
    siteName: "F1 Points Simulator",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
