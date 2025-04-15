import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MobileHomepage = () => {
  return (
    <main className="w-full flex flex-col items-center py-5 gap-4 ">
      <section className="text-center flex-col flex gap-5 items-center justify-center px-[25px]">
        <div className="w-full flex items-center justify-center">
          <div className="h-min py-[8px] px-[16px] rounded-full bg-orange-primary text-white font-medium font-poppins">
            Baru di Malang!
          </div>
        </div>
        <h1 className="font-bold text-[47pt] leading-[58px]">
          premium pet
          <span className="font-eldwin font-black text-orange-primary">
            {" "}
            care{" "}
          </span>
          solution
        </h1>
        <p className="w-[70%] font-semibold">
          Natural & Tech-Enhanced Pet Grooming Products untuk Anabul kesayangan
          mu!
        </p>
      </section>
      <section className="relative w-full">
        <div className="relative">
          <Image
            src={"asset/pawicon.svg"}
            width={50}
            height={50}
            alt="pawicon"
            className="scale-130 absolute z-20 rotate-300 translate-x-[50px] translate-y-[220px]"
          />
          <Image
            src={"asset/bone.svg"}
            width={50}
            height={50}
            alt="pawicon"
            className="scale-180 absolute right-0 translate-y-[190px] translate-x-[-40px] z-20"
          />
          <Image
            src={"asset/pawlove.svg"}
            width={50}
            height={50}
            alt="pawicon"
            className="scale-200 absolute z-20 translate-x-[100px] translate-y-[20px]"
          />
          <div className="absolute translate-x-[70px] z-10 translate-y-[-50px] overflow-hidden">
            <Image
              src={"/asset/browndog01.png"}
              width={500}
              height={500}
              alt="Brown Dog"
              className="object-cover scale-170 translate-y-[160px]"
            />
          </div>
          <div className="absolute translate-x-[-80px] z-11 translate-y-[-50px] overflow-hidden">
            <Image
              src={"/asset/whitecat01.png"}
              width={1000}
              height={1000}
              alt="Brown Dog"
              className="object-cover scale-150 translate-y-[160px]"
            />
          </div>
        </div>
        <div className="overflow-hidden w-[100%] mt-[320px]">
          <div className="w-[130%] bg-orange-primary py-4 z-40 absolute text-white text-3xl font-bold border-4 rotate-[-0.5deg] translate-x-[-10px]">
            <Marquee className="flex gap-1" speed={100}>
              perawatan terbaik untuk anabul dengan bahan alami{" "}
            </Marquee>
          </div>
          <div className="w-[120%] bg-[#FFAC02] py-4 z-39 absolute text-white text-3xl font-bold border-4 rotate-[2deg] translate-x-[-10px]">
            <Marquee>
              perawatan terbaik untuk anabul dengan bahan alami{" "}
            </Marquee>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileHomepage;
