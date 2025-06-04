"use client";
import { IMitra } from "@/types/mitra";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

interface MitraCardProps {
  mitra: IMitra;
}

export default function MitraCard({ mitra }: MitraCardProps) {
  const [isMitra] = useState<IMitra>(mitra);
  return (
    <section className="flex w-screen h-screen items-center justify-center">
      <div className="bg-orange-primary text-white py-10 px-10 flex gap-4 items-center rounded-[40px]">
        <div className="flex flex-col gap-10 w-[450px]">
          <Image
            src="/asset/mainlogo.svg"
            height={200}
            width={200}
            alt="Black Logo"
            className=""
          />
          <div className="gap-5 flex flex-col">
            <h1 className="font-poppins font-bold uppercase text-3xl max-w-[400px]">
              {isMitra.namapetshop}
            </h1>
            <div className="inline-flex items-center gap-2 max-w-[300px]">
              <MapPin size={45} />
              <p className="text-sm">{isMitra.alamat}</p>
            </div>
            <div className="inline-flex px-4 py-2 items-center gap-5 max-w-[300px] bg-green-600 rounded-[10px] border-3">
              <Phone size={30} />
              <p className="text-sm font-bold">0{isMitra.nomorwhatsapp}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 bg-white text-black h-full py-6 px-3 rounded-2xl">
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
    </section>
  );
}
