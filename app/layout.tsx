import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore - side-effect global CSS import provided by Next.js
import "./globals.css";
import Header from "@/components/althero";
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yeti International College - Transform Your Future",
  description:
    "Discover world-class education and opportunities at Yeti International College. Explore our programs, vibrant campus community, and student success stories.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Header /> */}

      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
