import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contruction = () => {
  return (
    <main className=" h-screen w-full bg-sky-600 relative overflow-hidden">
      <div className="w-full h-[50%] justify-center items-center flex flex-col gap-10">
        <Image
          src={"asset/mainlogo.svg"}
          height={150}
          width={150}
          alt="main logo"
        />
        <div className="text-white flex flex-col items-center gap-2 p-3 text-center">
          <h1 className="font-bold uppercase text-2xl ">
            WE&apos;RE LAUNCHING SOON
          </h1>
          <p className="font-medium font-poppins">
            Pawglow website is under contruction stay tuned for update.
          </p>
          <ul className="flex gap-3">
            {socialMedia.map((social) => (
              <li key={social.name}>
                <Link href={social.link}>{social.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={"/asset/catimage.png"}
          height={200}
          width={200}
          alt="cat image"
          className="absolute bottom-[-30px] z-0 scale-350"
        />
        <Image
          src={"/asset/pawicon.svg"}
          alt={"Paw Icon"}
          height={100}
          width={100}
          className="absolute bottom-[100px] left-[20px] rotate-300 z-10"
        />
      </div>
    </main>
  );
};

export default Contruction;
