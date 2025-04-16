"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useScreenWidth from "@/hooks/useScreenWidth";

const MainNavbar = () => {
  const screenWidth = useScreenWidth();
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

  if (screenWidth <= 750) {
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
  } else {
    return (
      <div className="relative h-[10%] w-full">
        <main className="w-full flex justify-between items-center py-7 px-[200px] fixed bg-[#88C6FF] z-50">
          <div>
            <Image
              src="/asset/bl-mainlogo.svg"
              alt="Main Logo"
              height={150}
              width={150}
              className="scale-130"
            />
          </div>
        </main>
      </div>
    );
  }
};

export default MainNavbar;
