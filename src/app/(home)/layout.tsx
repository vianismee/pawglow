import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
import MainNavbar from "@/components/Navbar/MainNavbar";
import MainFooter from "@/components/Footer/Footer";

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
        <div className="w-[100%] overflow-hidden">
          <div className="flex flex-col content-between">
            <MainNavbar />
            <div>{children}</div>
            <div className="translate-x-[-7px]">
              <MainFooter />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
