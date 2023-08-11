"use client";
import React, { useState, FC } from "react";
import { Navebar, Loader } from "@/ui";
import { Polygon } from "@/icons";

interface UnitPrices {
  tola?: number;
  masha?: number;
  ratti?: number;
}

const HeroSection: FC = () => {
  const [goldPrices, setGoldPrices] = useState<UnitPrices>({
    tola: 206000,
    masha: 17661,
    ratti: 1800,
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <header className="hero-sec relative h-[calc(100vh_-_50vh)] md:h-[calc(100vh_-_20vh)] bg-[url('/assets/hero.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 flex  flex-col items-center justify-between bg-black/70">
        {/* main navigatoin */}
        <Navebar className="text-white" />
        <div className="space-y-5 px-2 pb-3 md:pb-16 text-center text-white">
          {/* title */}
          <h1 className="text-xl font-semibold md:text-4xl">
            BUY GOLD, SILVER, AT THESE{" "}
            <span className="text-3xl md:text-5xl">LIVE PRICES</span>
          </h1>
          {/* live prices */}
          <div className="justify-center gap-4 md:gap-16 flex">
            <div className="flex flex-col items-center space-y-1 md:space-y-4 text-white">
              <h2 className="text-sm md:text-4xl font-semibold text-white">
                {isLoading ? (
                  <Loader />
                ) : (
                  goldPrices?.tola
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}{" "}
                <span className="text-xs md:text-sm">PKR</span>
              </h2>
              <Polygon />
              <p className="text-sm font-bold uppercase">TOLA 24 KARAT</p>
            </div>
            <div className="flex flex-col items-center space-y-1 md:space-y-4 text-white">
              <h2 className="text-sm md:text-4xl font-semibold text-white">
                {isLoading ? (
                  <Loader />
                ) : (
                  goldPrices?.masha
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}{" "}
                {""}
                <span className="text-xs md:text-sm">PKR</span>
              </h2>
              <Polygon />
              <p className="text-sm font-bold uppercase">MASHA 24 KARAT</p>
            </div>
            <div className="flex flex-col items-center space-y-1 md:space-y-4 text-white">
              <h2 className="text-sm md:text-4xl font-semibold text-white">
                {isLoading ? (
                  <Loader />
                ) : (
                  goldPrices?.ratti
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                )}{" "}
                {""}
                <span className="text-xs md:text-sm">PKR</span>
              </h2>
              <Polygon />
              <p className="text-sm font-bold uppercase">RATTI 24 KARAT</p>
            </div>
          </div>
          <button className="rounded-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400  py-2  px-7 text-sm md:text-base font-semibold tracking-wide text-white">
            GET STARTED
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
