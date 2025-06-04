"use client";

import { IMitra } from "@/types/mitra";
import React, { useEffect, useState } from "react";
import supabase from "../../../../../lib/db";
import Link from "next/link";
import { CircleChevronLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

const MobileMitra = () => {
  const [isMitra, setIsMitra] = useState<IMitra[]>([]);
  const [isMitraCode, setIsMitraCode] = useState("");

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
        <button className="px-1 py-1 bg-white rounded-full font-bold text-lg text-orange-primary hover:text-white hover:bg-orange-primary border-4 border-orange-primary transition-all cursor-pointer ease-in-out">
          <Link href={"/mitra/register"}>Join Mitra</Link>
        </button>
        <Dialog>
          <DialogTrigger>
            <button className="px-1 py-1 bg-white rounded-full font-bold text-lg text-orange-primary hover:text-white hover:bg-orange-primary border-4 border-orange-primary transition-all cursor-pointer ease-in-out">
              Verifikasi Mitra
            </button>
          </DialogTrigger>
          <DialogContent className="flex justify-center flex-col items-center gap-4">
            <DialogHeader className="">
              <DialogTitle>
                <h1 className="font-bold">Masukkan Kode Mitra</h1>
              </DialogTitle>
            </DialogHeader>
            <InputOTP
              maxLength={7}
              className="upercase"
              required
              value={isMitraCode}
              onChange={(isMitraCode) =>
                setIsMitraCode(isMitraCode.toUpperCase())
              }
            >
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
              <InputOTPSlot index={6} />
            </InputOTP>
            <div className="w-[50%]">
              <Link href={`/mitra/${isMitraCode}`}>
                <button className="w-full bg-orange-primary rounded-[5px] py-2 font-bold text-white ">
                  Konformasi
                </button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default MobileMitra;
