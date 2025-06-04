"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

interface MitraNotFoundProps {
  verifycode: string;
}

export default function MitraNotFound({ verifycode }: MitraNotFoundProps) {
  const [mitra] = useState(verifycode);
  return (
    <section className="flex justify-center items-center min-h-screen  p-4">
      {" "}
      {/* Mengubah h-screen menjadi min-h-screen dan menambah padding dasar */}
      <div className="px-4 sm:px-6 lg:px-8 py-8 flex justify-center items-center flex-col text-gray-800 gap-8 md:gap-10 w-full max-w-2xl">
        {" "}
        {/* Menambah max-w-2xl dan padding responsif */}
        <strong className="font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[100pt] text-orange-primary text-center">
          {" "}
          {/* Ukuran font responsif */}
          Wooops!
        </strong>
        <div className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 bg-white rounded-[20px] shadow-lg w-full">
          {" "}
          {/* Padding responsif dan shadow */}
          <h1 className="text-2xl sm:text-3xl md:text-[30pt] font-medium text-center">
            Mitra dengan Kode
          </h1>{" "}
          {/* Ukuran font responsif dan text-center */}
          <p className="text-4xl sm:text-5xl md:text-[60pt] font-bold text-orange-primary my-4 md:my-6 text-center break-all">
            {" "}
            {/* Ukuran font responsif, margin vertikal, dan break-all untuk kode panjang */}
            {mitra}
          </p>
          <p className="text-2xl sm:text-3xl md:text-[30pt] font-medium text-center">
            Tidak ditemukan
          </p>{" "}
          {/* Ukuran font responsif dan text-center */}
          <Link href={"/mitra"} className="w-full mt-8 md:mt-[60px]">
            {" "}
            {/* Margin atas responsif */}
            <Button className="h-12 sm:h-14 md:h-[50px] w-full text-lg sm:text-xl md:text-[20pt] bg-orange-primary hover:bg-orange-primary/90">
              {" "}
              {/* Tinggi dan ukuran font tombol responsif */}
              Kembali
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
