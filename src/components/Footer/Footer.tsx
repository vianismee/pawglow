"use client";
import Image from "next/image";
import useScreenWidth from "@/hooks/useScreenWidth";

const MainFooter = () => {
  const screenWidth = useScreenWidth();

  if (screenWidth <= 750) {
    return (
      <footer className="w-[105%] flex flex-col items-center gap-8 justify-center bg-orange-primary pt-[25px] pb-[25px] border-t-4 border-r-4 border-l-4 border-white rounded-t-[50px] px-6">
        <div className="text-white flex flex-col items-center gap-2">
          <h1 className="font-medium">Powered by</h1>
          <Image
            src="/asset/mainlogo.svg"
            alt="Main Logo"
            height={150}
            width={150}
            className="scale-125 translate-x-[-3px]"
          />
        </div>
        <div className="text-white text-center text-[10pt] flex flex-col gap-3">
          <h1>
            Copyright © All Rights Reserved, <br />
            <span className="font-bold">PAWGLOW INNOVATION LABORATORY</span>
          </h1>
          <p className="text-white hover:underline cursor-pointer">
            <a href="mailto:hello@pawglow.space">hello@pawglow.space</a>
          </p>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="w-[101%] flex bg-orange-primary justify-between pt-[25px] px-[200px] mt-[100px] border-t-4 border-r-4 border-l-4 border-white rounded-t-[80px] pb-[20px] items-center">
        <div className="h-min flex gap-8 items-center text-white">
          <h1 className="font-semibold"> Powered by</h1>
          <Image
            src="/asset/mainlogo.svg"
            alt="Main Logo"
            height={150}
            width={150}
            className="scale-130"
          />
        </div>

        <h1 className="font-medium text-white">
          Copyright © All Rights Reserved, PAWGLOW INNOVATION LABORATORY
        </h1>
        <h1 className="text-white hover:underline cursor-pointer">
          <a href="mailto:hello@pawglow.space">hello@pawglow.space</a>
        </h1>
      </footer>
    );
  }
};

export default MainFooter;
