import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  GoldCalculator,
  GoldInvestment,
  GoldRateComparison,
  GoldRatesGeneral,
  GoldRatesPak,
  HeroSection,
  MobileApp,
  Subscribe,
  WhoWeAre,
} from "@/components/Home";
import { Footer } from "@/ui/Footer";

const HomePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Current.Gold</title>
      </Head>
      <HeroSection />
      <WhoWeAre />
      <GoldCalculator />
      <GoldRatesGeneral />
      <GoldRatesPak />
      <GoldRateComparison />
      <GoldInvestment />
      <Subscribe />
      <MobileApp />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
