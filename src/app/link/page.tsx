import Image from "next/image";
import { BrownBeig } from "../font/font";

export default function LinkPage() {
  return (
    <main className="w-full flex flex-col">
      <section
        className={`${BrownBeig.className} py-6 bg-[#4AA4DB] flex flex-col h-[200px] justify-center items-center rounded-2xl text-white relative overflow-hidden`}
      >
        <Image
          src={"/asset/pawicon.svg"}
          alt={"Paw Icon"}
          height={50}
          width={50}
          className="absolute bottom-[30px] left-[90px] rotate-300 z-10"
        />
        <h1 className="text-3xl text-center w-full p-1 grow">
          One Step <br /> Pet Care Solution
        </h1>
        <div className="h-1/2">
          <Image
            src={"/asset/catimage.png"}
            alt="Cat Image"
            width={400}
            height={400}
            className="absolute z-0 bottom-[-270px] left-0 scale-130"
          />
        </div>
      </section>
      <section className="h-[1080px]"> Hello World</section>
    </main>
  );
}
