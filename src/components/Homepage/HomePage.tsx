import React from "react";
import Image from "next/image";

export const HomePage = () => {
  return (
    <main className="flex py-20 lg:flex-row flex-col">
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
            product
          </h1>
          <p className="font-poppins font-semibold text-2xl text-black/70 w-110 leading-8">
            Natural & Tech-Enhanced Pet Grooming Products untuk Anabul
            kesayangan mu!
          </p>
        </div>
      </section>
      {/* Image */}
      <section className="w-[50%] relative">
        <Image
          src={"asset/pawicon.svg"}
          width={50}
          height={50}
          alt="pawicon"
          className="scale-250 absolute z-50 rotate-300 bottom-[50px] left-[100px]"
        />
        <Image
          src={"asset/pawlove.svg"}
          width={50}
          height={50}
          alt="pawicon"
          className="scale-290 absolute z-50 top-[50px] left-[250px]"
        />
        <Image
          src={"asset/bone.svg"}
          width={50}
          height={50}
          alt="pawicon"
          className="scale-290 absolute z-50 bottom-[150px] right-[-20px]"
        />
        <div className="relative">
          <div className="absolute right-[-200px] w-full h-[700px] overflow-hidden">
            <Image
              src={"/asset/browndog01.png"}
              width={1000}
              height={1000}
              alt="Brown Dog"
              className="object-cover scale-180 translate-y-[160px]"
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
  );
};
