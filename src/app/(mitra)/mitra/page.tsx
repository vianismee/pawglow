"use client";

import useScreenWidth from "@/hooks/useScreenWidth";
import DesktopMitra from "./components/DesktopMitra";
import MobileMitra from "./components/MobileMitra";

export default function Home() {
  const screenWidth = useScreenWidth();

  if (screenWidth <= 750) {
    return (
      <>
        <MobileMitra />
      </>
    );
  } else {
    return (
      <>
        <DesktopMitra />
      </>
    );
  }
}
