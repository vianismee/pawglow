import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { Leaf, FlaskConicalOff, Rabbit } from "lucide-react";
import Link from "next/link";

const MobileHomepage = () => {
  return (
    <main className="w-full flex flex-col items-center py-5 gap-4 overflow-hidden">
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
        <div className="overflow-hidden w-screen mt-[320px]">
          <div className="w-[110%] bg-orange-primary py-4 z-40 absolute text-white text-3xl font-bold border-4 border-white rotate-[-0.5deg] translate-x-[-10px]">
            <Marquee className="font-bold flex gap-2" speed={150}>
              <p className="">
                perawatan terbaik{" "}
                <span className="font-eldwin font-bold"> untuk </span> anabul
                dengan <span className="font-eldwin font-bold"> bahan </span>{" "}
                alami
              </p>
              <p className="">
                perawatan terbaik{" "}
                <span className="font-eldwin font-bold"> untuk </span> anabul
                dengan <span className="font-eldwin font-bold"> bahan </span>{" "}
                alami
              </p>
            </Marquee>
          </div>
          <div className="w-[110%] bg-[#FFAC02] py-4 z-39 absolute text-white text-3xl font-bold border-4 border-white rotate-[2deg] translate-x-[-10px]">
            <Marquee>
              perawatan terbaik untuk anabul dengan bahan alami{" "}
            </Marquee>
          </div>
        </div>
      </section>
      <section className="bg-white w-full flex flex-col gap-[40px] justify-center items-center mt-[50px] pt-[30px] pb-[25px] rounded-b-3xl">
        <h1 className="text-center font-poppins font-bold leading-[28px] text-xl">
          Inspired by the <br /> Kindness of Nature
        </h1>
        <div className="flex flex-col gap-[20px] justify-center">
          <div className="flex flex-col gap-3 justify-center items-center">
            <Leaf height={60} width={60} className="text-[#FFAC02]" />
            <p className="font-semibold font-poppins text-zinc-700">
              Natural Ingredients
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <FlaskConicalOff
              height={60}
              width={60}
              className="text-[#FFAC02]"
            />
            <p className="font-semibold font-poppins text-zinc-700">
              Free Alcohol
            </p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <Rabbit height={60} width={60} className="text-[#FFAC02]" />
            <p className="font-semibold font-poppins text-zinc-700">
              Cruelty-Free
            </p>
          </div>
        </div>
      </section>
      <section className="text-center flex-col flex gap-5 items-center justify-center px-[25px] mt-5 relative">
        <div className="w-full flex items-center justify-center">
          <div className="h-min py-[8px] px-[16px] rounded-full bg-[#FFAC02] text-white font-medium font-poppins">
            Hadir lebih dekat!
          </div>
        </div>
        <h1 className="font-bold text-[38pt] leading-[50px] z-40">
          temukan kami di petshop
          <span className="font-eldwin font-black text-orange-primary">
            {" "}
            sekitarmu{" "}
          </span>
        </h1>
        <div className="flex justify-center items-center">
          <Link href="/mitra">
            <button className="bg-[#ff8502] px-8 py-2 font-bold rounded-full text-white">
              Lokasi Mitra
            </button>
          </Link>
        </div>
        <p className="w-[70%] font-semibold"></p>
        <div className="w-full h-full">
          <Image
            src={"asset/eastjavamap.svg"}
            alt="Peta Jawa"
            height={200}
            width={200}
            className="top-28 scale-200 -z-0 absolute right-[100px]"
          />
        </div>
      </section>
    </main>
  );
};

export default MobileHomepage;
