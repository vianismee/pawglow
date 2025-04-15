"use client";
import React from "react";
import Image from "next/image";

const MainNavbar = () => {
  return (
    <div className="relative h-[15%] w-full">
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
        <ul className="flex gap-[48px] text-[14pt] font-bold">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PRODUCT</li>
        </ul>
        <div>Contact Us</div>
      </main>
    </div>
  );
};

export default MainNavbar;
