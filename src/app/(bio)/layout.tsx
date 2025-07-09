import React from "react";
import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BIO | PAWGLOW",
  description: "No. 1 Pet Care Product at Indonesia",
};

export default function BioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className={`${poppins.className} antialiased h-min bg-[#88C6FF]`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
