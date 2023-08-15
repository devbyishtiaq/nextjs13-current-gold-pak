"use client";
import { AppleIcon, PlaystoreIcon } from "@/icons";
import Image from "next/image";
import { FC } from "react";

const MobileApp: FC = () => {
  return (
    <section
      id="mobileapp"
      className="relative bg-white flex h-[calc(100vh_-_65vh)] sm:h-[calc(100vh_-_50vh)] items-center justify-center lg:h-[calc(100vh_-_35vh)] bg-[url('/assets/coming-soon.svg')] bg-no-repeat bg-center px-4"
    >
      <div className="flex items-center h-full ">
        <div className="max-w-lg md:min-w-[32rem] sm:w-96 text-center sm:text-left">
          <h3 className="bg-custom-gradient  bg-clip-text text-transparent text-4xl lg:text-6xl uppercase font-bold tracking-wider">
            coming soon
          </h3>
          <p className="text-[#333333] text-sm mt-4">
            We are excited to announce that our app is coming live soon on
            multiple platform for a more smooth way to use our product for our
            users.
          </p>
          {/* buttons */}
          <div className="flex items-center sm:justify-start justify-center gap-1 sm:gap-4 mt-5 ">
            {/* google play */}
            <div className="bg-black cursor-pointer rounded-md flex items-center justify-center gap-2 py-1 px-2 min-w-[150px]">
              <PlaystoreIcon className="w-7" />
              <div className="flex flex-col">
                <span className="text-white text-xs">Get it on</span>
                <span className="text-white text-sm sm:text-md">
                  Google Play
                </span>
              </div>
            </div>
            {/* app store */}
            <div className="bg-black cursor-pointer rounded-md flex items-center justify-center gap-1 py-1 px-2 min-w-[150px]">
              <AppleIcon className="w-6 h-7" />
              <div className="flex flex-col">
                <span className="text-white text-xs">Donwload on the</span>
                <span className="text-white text-sm sm:text-md">App Store</span>
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="h-full flex items-end relative z-50 overflow-hidden ">
          <Image
            src="assets/mobile.svg"
            alt="mobile phone"
            width={363}
            height={500}
            className="hidden sm:block w-[200px] sm:min-w-[200px] lg:min-w-[330px] -mb-14 lg:-mb-28 relative z-[9999999]"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
