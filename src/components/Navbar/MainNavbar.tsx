"use client";
import React, { useState } from "react";
import Image from "next/image";

const width = document.documentElement.clientWidth;

console.log(`width: ${width}`);

const MainNavbar = () => {
  return (
    <main className="w-full flex justify-between items-center py-7 px-[200px]">
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
  );
};

export default MainNavbar;
