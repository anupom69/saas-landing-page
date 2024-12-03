import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "./globals.css";
import DeveloperCredit from "@/components/Credit";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Dipannita Roy - Project Showcase!",
  description: "A Simple Design Tool for Designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white`}
      >
        <ReactLenis root>
          {children}
          <DeveloperCredit />
        </ReactLenis>
      </body>
    </html>
  );
}
