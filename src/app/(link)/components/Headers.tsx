"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Headers() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-center py-2 bg-red-500 transition-transform duration-300 z-50 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <Image
        src="/asset/mainlogo.svg"
        alt="Main Logo"
        height={150}
        width={150}
      />
    </header>
  );
}
