import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nu7as Tech | Innovating the Future of Web",
  description:
    "Stay ahead in technology, web development, and AI. Explore cutting-edge trends, coding tutorials, and expert insights to shape the future.",
  keywords: [
    "Technology",
    "Web Development",
    "Programming",
    "Software Development",
    "AI & Machine Learning",
    "Tech News",
    "Coding Tutorials",
    "Web Design",
    "Future of Technology",
  ],
  icons: {
    icon: "/Nu7astech.png", // Correct path for Next.js public assets
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          {children}
          <Toaster/>
      </body>
    </html>
  );
}
