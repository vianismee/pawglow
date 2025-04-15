import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import MainNavbar from "../components/Navbar/MainNavbar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased h-min bg-[#88C6FF]`}>
        <div className="flex flex-col gap-[100px]">
          <MainNavbar />
          <div className="">{children}</div>
        </div>
      </body>
    </html>
  );
}
