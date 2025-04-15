import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Leaf, FlaskConicalOff, Rabbit } from "lucide-react";

export const HomePage = () => {
  return (
    <section className="flex flex-col relative overflow-hidden">
      <main className="flex py-20 lg:flex-row flex-col px-[200px]">
        {/* Main Header Text */}
        <section className="w-[50%] flex flex-col items-start gap-4">
          <div className="px-5 py-2 font-poppins text-[15pt] font-semibold text-white rounded-full bg-[#ED581F]">
            Baru di Malang!
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-poppins font-bold text-[89pt] text-zinc-800 leading-[110px]">
              premium pet{" "}
              <span className="font-eldwin font-extrabold text-orange-600">
                care
              </span>{" "}
              solution
            </h1>
            <p className="font-poppins font-semibold text-2xl text-black/70 w-110 leading-8">
              Natural & Tech-Enhanced Pet Grooming Products untuk Anabul
              kesayangan mu!
            </p>
          </div>
        </section>
        {/* Image */}
        <section className="w-[50%] relative z-0">
          <div className="h-min relative">
            <Image
              src={"asset/pawicon.svg"}
              width={50}
              height={50}
              alt="pawicon"
              className="scale-250 absolute z-20 rotate-300 top-[430px] left-[100px]"
            />
            <Image
              src={"asset/pawlove.svg"}
              width={50}
              height={50}
              alt="pawicon"
              className="scale-290 absolute z-20 top-[50px] left-[250px]"
            />
            <Image
              src={"asset/bone.svg"}
              width={50}
              height={50}
              alt="pawicon"
              className="scale-290 absolute z-20 top-[370px] right-[-20px]"
            />
          </div>
          <div className="relative">
            <div className="absolute right-[-200px] w-full h-[700px] overflow-hidden">
              <Image
                src={"/asset/browndog01.png"}
                width={1000}
                height={1000}
                alt="Brown Dog"
                className="object-cover scale-170 translate-y-[160px]"
              />
            </div>
            <div className="absolute w-full right-[80px] h-[700px] overflow-hidden">
              <Image
                src={"/asset/whitecat01.png"}
                width={1000}
                height={1000}
                alt="Brown Dog"
                className="object-cover scale-150 translate-y-[160px]"
              />
            </div>
          </div>
        </section>
      </main>
      <main className="overflow-hidden w-[100%]">
        <div className="w-[110%] right-0 left-[-10px] bg-[#FFAC02] h-min z-0 absolute text-white rotate-[1deg] border-[6px] border-white">
          <Marquee
            className="h-min w-full flex items-center py-6"
            speed={200}
            direction="right"
          >
            <p className="text-6xl font-semibold">
              perawatan terbaik{" "}
              <span className="font-eldwin font-bold">untuk</span> hewan dengan{" "}
              {""}
              <span className="font-eldwin font-bold">dengan</span>
              {""} alami
            </p>
          </Marquee>
        </div>
        <div className="w-[110%] right-0 left-[-10px] bg-[#ED581F] h-min z-10 absolute text-white rotate-[-0.5deg] border-[6px] border-white">
          <Marquee className="h-min w-full flex items-center py-6" speed={200}>
            <p className="text-6xl font-semibold">
              perawatan terbaik{" "}
              <span className="font-eldwin font-bold">untuk</span> hewan dengan{" "}
              {""}
              <span className="font-eldwin font-bold">bahan</span>
              {""} alami
            </p>
          </Marquee>
        </div>
      </main>
      <main className="w-full bg-white h-min rounded-b-[60px] px-[200px] py-[50px] mt-[110px]">
        <div className="flex gap-3 items-center">
          <h1 className="font-semibold font-poppins text-3xl w-[30%] leading-10">
            Inspired by the <br /> Kindness of Nature
          </h1>
          <div className="flex items-center justify-around w-full">
            <div className="flex flex-col gap-3">
              <Leaf height={60} width={60} className="text-[#FFAC02]" />
              <p className="text-xl font-bold font-poppins">
                Natural <br /> Ingredients
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <FlaskConicalOff
                height={60}
                width={60}
                className="text-[#FFAC02]"
              />
              <p className="text-xl font-bold font-poppins">
                Alcohol <br /> Free
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Rabbit height={60} width={60} className="text-[#FFAC02]" />
              <p className="text-xl font-bold font-poppins">
                Cruelty- <br /> Free
              </p>
            </div>
          </div>
        </div>
      </main>
      <main className="w-full h-min py-10 px-[200px] mt-[200px] flex justify-end relative">
        <div className="relative w-[50%] h-min z-0">
          <Image
            src={"asset/eastjavamap.svg"}
            alt="Peta Jawa"
            height={200}
            width={200}
            className="scale-400 top-28 absolute right-[100px]"
          />
          <div className="absolute top-[190px] left-[420px] scale-150">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>
          </div>
        </div>
        <section className="w-[50%] flex flex-col items-start gap-4 z-10">
          <div className="px-5 py-2 font-poppins text-[15pt] font-semibold text-white rounded-full bg-[#FFAC02]">
            Hadir lebih dekat!
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-poppins font-bold text-[60pt] text-zinc-800 leading-[80px]">
              temukan <br /> kami di petshop{" "}
              <span className="font-eldwin font-extrabold text-orange-600">
                sekitarmu
              </span>{" "}
            </h1>
          </div>
        </section>
      </main>
      <main className="w-full h-[1080px]"></main>
    </section>
  );
};
