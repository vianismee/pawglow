"use client";
import { listMitra } from "@/data";
import useScreenWidth from "@/hooks/useScreenWidth";

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
            <h1 className="font-poppins font-bold text-[60pt]">
              mitra{" "}
              <span className="font-eldwin font-black text-orange-primary">
                kami
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
        </section>
      </>
    );
  }
}
