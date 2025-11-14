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
  title: "Nandani - Full-Stack Developer & DevOps | Studio Ghibli Inspired",
  description:
    "Beautiful portfolio website of Nandani, a full-stack developer and DevOps enthusiast. Explore projects, experience, and get in touch.",
  keywords:
    "developer, full-stack, devops, portfolio, react, next.js, typescript",
  openGraph: {
    title: "Nandani - Full-Stack Developer & DevOps",
    description:
      "Beautiful portfolio website with Studio Ghibli inspired design",
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
      <head>
        {/* Add any additional meta tags or scripts here */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
