"use client";
import React from "react";
import MobilePage from "./components/MobilePage";
import DesktopPage from "./components/DesktopPage";
import useScreenWidth from "@/hooks/useScreenWidth";

export default function Home() {
  const screenWidth = useScreenWidth();

  if (screenWidth <= 750) {
    return (
      <>
        <MobilePage />
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
