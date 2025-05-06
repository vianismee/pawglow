"use client";
import useScreenWidth from "@/hooks/useScreenWidth";
import { DesktopPage } from "@/components/desktop/Homepage/DesktopPage";
import MobileHomepage from "@/components/mobile/MobileHomepage";

export default function Home() {
  const screenWidth = useScreenWidth();

  if (screenWidth <= 750) {
    return (
      <>
        <MobileHomepage />
      </>
    );
  } else {
    return (
      <>
        <DesktopPage />
      </>
    );
  }
}
