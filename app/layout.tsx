import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Contact from "@/components/main/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ferrouk Massinissa",
  description: "My portfolio Website Ferrouk Massinissa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Contact />
      </body>
    </html>
  );
}
