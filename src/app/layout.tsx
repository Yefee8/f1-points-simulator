import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center`}
      >
        {children}
      </body>
    </html>
  );
}
