"use client";

import { IMitra } from "@/types/mitra";
import React, { useEffect, useState } from "react";
import supabase from "../../../../../lib/db";
import Link from "next/link";
import { CircleChevronLeft } from "lucide-react";

const MobileMitra = () => {
  const [isMitra, setIsMitra] = useState<IMitra[]>([]);
  useEffect(() => {
    const fetchMitra = async () => {
      const { data, error } = await supabase.from("mitra").select("*");
      if (error) console.log("error:", error);
      else setIsMitra(data);
    };
    fetchMitra();
  }, []);

  return (
    <section className="flex flex-col justify-center mt-10 items-center px-5 gap-6">
      <main>
        <h1 className="font-bold text-[25pt] leading-[35px] z-40 text-center">
          kami hadir di
          <span className="font-eldwin font-black text-orange-primary">
            {" "}
            petshop{" "}
          </span>
          terdekat{" "}
          <span className="font-eldwin font-black text-orange-primary">
            {" "}
            mu{" "}
          </span>
        </h1>
      </main>
      {isMitra
        .filter((mitra) => mitra.maplink)
        .map((mitra, index) => (
          <main
            key={index}
            className="flex flex-col w-full bg-white rounded-[10px] px-10 py-4 items-center gap-3 justify-center"
          >
            <div>
              <iframe
                src={mitra.maplink}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg bg-cover"
              ></iframe>
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <h1 className="font-bold text-center">{mitra.namapetshop}</h1>
              <p className="text-center text-[10pt] ">{mitra.alamat}</p>
            </div>
            <button className="bg-orange-primary w-full py-2 font-bold text-white text-[10pt] rounded-[5px]">
              <a
                href={`https://wa.me/+62${mitra.nomorwhatsapp}?text=Halo%20Mitra%20Pawglow%2C%20saya%20ingin%20menanyakan%20stok%20produk`}
              >
                Kontak Kami
              </a>
            </button>
          </main>
        ))}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-white rounded-full hover:rotate-50 transition cursor-pointer delay-200">
          <Link href={"/"}>
            <CircleChevronLeft
              height={60}
              width={60}
              className="text-orange-primary"
            />
          </Link>
        </div>
        <button className="px-8 py-3 bg-white rounded-full font-bold text-lg text-orange-primary hover:text-white hover:bg-orange-primary border-4 border-orange-primary transition-all cursor-pointer ease-in-out">
          <Link href={"/mitra/register"}>Join Mitra</Link>
        </button>
      </div>
    </section>
  );
};

export default MobileMitra;
