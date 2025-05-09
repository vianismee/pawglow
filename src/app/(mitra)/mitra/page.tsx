"use client";
import { listMitra } from "@/data";
import useScreenWidth from "@/hooks/useScreenWidth";
import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const screenWidth = useScreenWidth();

  if (screenWidth <= 750) {
    return (
      <>
        <div>{""}</div>
      </>
    );
  } else {
    return (
      <>
        <section className="mt-[100px] px-[200px]">
          <main className="w-full flex flex-col items-center gap-4">
            <h1 className="font-poppins font-bold text-[40pt]">
              kami hadir di{" "}
              <span className="font-eldwin font-black text-orange-primary">
                petshop{" "}
              </span>
              terdekat{" "}
              <span className="font-eldwin font-black text-orange-primary">
                mu{" "}
              </span>
            </h1>
            <div className="px-[20px] py-[20px] w-full bg-[#fffcea] rounded-2xl flex gap-[20px] flex-col ">
              {listMitra.map((mitra, index) => (
                <div
                  key={index}
                  className="px-[20px] py-[10px] w-[100%] bg-white border-green-600 border-3 rounded-lg flex gap-10"
                >
                  <iframe
                    src={mitra.mapLink}
                    width="500"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                  <div className="py-3 flex flex-col gap-3 justify-center">
                    <h1 className="font-Poppins font-bold text-2xl">
                      {mitra.nama}
                    </h1>
                    <p>{mitra.alamat}</p>
                    <a
                      href={`https://wa.me/${mitra.whatsapp}?text=Halo%20Mitra%20Pawglow%2C%20saya%20ingin%20menanyakan%20stok%20produk`}
                    >
                      <div className="font-bold flex">
                        <h1 className="px-4 py-2 rounded-[10px] hover:bg-green-500 bg-orange-primary transition-all ease-in-out delay-150 cursor-pointer text-white">
                          Kontak Kami
                        </h1>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3">
            <div className="bg-white rounded-full hover:rotate-50 transition cursor-pointer delay-200">
              <Link href={"/"}>
                <CircleChevronLeft
                  height={60}
                  width={60}
                  className="text-orange-primary"
                />
              </Link>
            </div>
            <button className="px-8 py-3 bg-white rounded-full font-bold text-lg text-orange-primary hover:text-white hover:bg-orange-primary border-4 border-orange-primary transition-all cursor-not-allowed ease-in-out">
              Join Mitra
            </button>
          </div>
        </section>
      </>
    );
  }
}
