"use client";
import { IMitra } from "@/types/mitra";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MitraCardProps {
  mitra: IMitra;
}

export default function MitraCard({ mitra }: MitraCardProps) {
  const [isMitra] = useState<IMitra>(mitra);
  return (
    <section className="flex flex-col h-min w-full md:w-screen md:h-screen items-center justify-center gap-5 mt-6 md:mt-0 mb-6 md:mb-0">
      <div className="bg-orange-primary text-white px-5 py-5 md:py-10 md:px-10 flex flex-col md:flex-row gap-4 items-center rounded-[20px] md:rounded-[40px]">
        <div className="flex flex-col gap-10 w-[300px] md:w-[450px] justify-center items-center md:justify-start md:items-start">
          <Image
            src="/asset/mainlogo.svg"
            height={200}
            width={200}
            alt="Black Logo"
            className=""
          />
          <div className="gap-5 flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left">
            <h1 className="font-poppins font-bold uppercase text-[15pt] md:text-3xl max-w-[400px]">
              {isMitra.namapetshop}
            </h1>
            <div className="md:flex-row flex flex-col items-center md:items-center gap-2 md:gap-2 md:max-w-[300px]">
              <MapPin size={45} />
              <p className="text-sm">{isMitra.alamat}</p>
            </div>
            <Link
              href={`https://wa.me/+62${isMitra.nomorwhatsapp}?text=Halo%20${isMitra.namapetshop}%20saya%20ingin%20menanyakan%20produk%20Pawglow`}
              className="w-full h-full"
            >
              <div className="inline-flex px-4 py-2 items-center gap-5 max-w-[300px] bg-green-600 rounded-[10px] border-3">
                <Phone size={30} />
                <p className="text-sm font-bold">0{isMitra.nomorwhatsapp}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 bg-white text-black h-full w-full md:max-w-[200px] py-6 px-3 rounded-2xl">
          <h1 className="font-bold text-[15pt] inline-flex justify-center items-center gap-2">
            <QrCode className="text-gray-500" /> KODE MITRA
          </h1>
          <div className="px-3 py-3 bg-white">
            <QRCodeSVG
              value={`https://pawglow.space/mitra/${isMitra.verifycode}`}
              title={isMitra.namapetshop}
              size={150}
              level={"M"}
              minVersion={2}
              imageSettings={{
                src: "https://www.pawglow.space/asset/pawicon.svg",
                x: undefined,
                y: undefined,
                height: 40,
                width: 40,
                opacity: 1,
                excavate: true,
              }}
            />
          </div>
          <h1 className="font-bold text-[20pt]">{isMitra.verifycode}</h1>
        </div>
      </div>
      <Link href={"/mitra"}>
        <Button
          className="cursor-pointer scale-110 font-bold text-[15pt] text-orange-primary hover:text-white bg-white hover:bg-orange-primary border-3 border-orange-primary"
          size={"lg"}
        >
          Kembali
        </Button>
      </Link>
    </section>
  );
}
