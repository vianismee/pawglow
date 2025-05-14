import Image from "next/image";
import Link from "next/link";
import React from "react";

const MobilePage = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <section className="py-7 px-6 bg-white w-full flex flex-col items-center gap-8 rounded-[15px]">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl">CERTIFICATE</h1>
          <p className="text-[15pt] italic">of Authenticity</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-semibold text-[12pt]">
            OFFICIAL PRODUCT LICENSE
          </h1>
          <Image
            src="/asset/bl-mainlogo.svg"
            alt="Main Logo"
            height={200}
            width={200}
          />
          <p className="text-center text-[10pt]">
            This certifies that the product you have purchased is an authentic,
            high-quality item from <span className="font-bold">PAWGLOW™</span>.
          </p>
        </div>
        <Link href={"/"} className="w-full">
          <div className="bg-orange-primary w-full py-[10px] flex justify-center rounded-[5px]">
            <h1 className="font-bold text-white">Confirmation</h1>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default MobilePage;
