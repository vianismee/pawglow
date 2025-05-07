import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PAWGLOW",
  description: "No. 1 Pet Care Product at Indonesia",
};

export default function LinkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased h-min bg-[#88C6FF]`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
