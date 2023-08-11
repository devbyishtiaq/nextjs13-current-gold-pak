"use client";
import { useState, FC } from "react";

import { TabNavItem } from "./TabNavItem";
import { TabContent } from "./TabContent";
import { GreenArrow, RedArrow } from "@/icons";

const GoldRatesGeneral: FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="bg-white">
      <div className="container py-16">
        <div className="text-center">
          <h2 className="text-2xl font-semibold uppercase text-[#333333]">
            GOLD RATES
          </h2>
        </div>
        <div className="Tabs mt-16">
          <ul className="nav flex justify-center gap-2 md:gap-20">
            <TabNavItem
              city="24 Carat"
              id="tab1"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabNavItem
              city="22 Carat"
              id="tab2"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabNavItem
              city="21 Carat"
              id="tab3"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>

          <div className="mt-16">
            <TabContent id="tab1" activeTab={activeTab}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b-2 border-gray-300">
                      <th className="w-24 py-4 text-center align-middle text-sm sm:text-lg md:text-xl font-bold text-[#333333]">
                        Gram
                      </th>
                      <th className="w-24 py-4 text-center align-middle text-sm sm:text-lg md:text-xl font-bold text-[#333333]">
                        24K Gold Price
                      </th>
                      <th className="w-24 py-4 text-center align-middle text-sm sm:text-lg md:text-xl font-bold text-[#333333]">
                        Daily Price Change
                      </th>
                    </tr>
                    <tr className="border-b-2 border-gray-200 text-center">
                      <td className="py-4 font-semibold  text-[#333333]">
                        1 Gram
                      </td>
                      <td className="py-4 font-semibold text-[#333333] ">
                        12930 <span className="ml-2 text-xs">PKR</span>
                      </td>
                      <td className="flex items-center justify-center py-4 font-semibold text-[#333333]">
                        +0.54%
                        <span className="ml-6">
                          <RedArrow />
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b-2 border-gray-200 text-center">
                      <td className="py-4 font-semibold  text-[#333333]">
                        5 Gram
                      </td>
                      <td className="py-4 font-semibold text-[#333333] ">
                        130,440 <span className="ml-2 text-xs">PKR</span>
                      </td>
                      <td className="flex items-center justify-center py-4 font-semibold text-[#333333]">
                        +0.54%
                        <span className="ml-6">
                          <RedArrow />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b-2 border-gray-300">
                      <th className="w-24 py-4 text-center align-middle text-xl font-bold text-[#333333]">
                        Gram
                      </th>
                      <th className="w-24 py-4 text-center align-middle text-xl font-bold text-[#333333]">
                        24K Gold Price
                      </th>
                      <th className="w-24 py-4 text-center align-middle text-xl font-bold text-[#333333]">
                        Daily Price Change
                      </th>
                    </tr>

                    <tr className="border-b-2 border-gray-200 text-center">
                      <td className="py-4 font-semibold  text-[#333333]">
                        5 Gram
                      </td>
                      <td className="py-4 font-semibold text-[#333333] ">
                        130,440 <span className="ml-2 text-xs">PKR</span>
                      </td>
                      <td className="flex items-center justify-center py-4 font-semibold text-[#333333]">
                        +0.54%
                        <span className="ml-6">
                          <RedArrow />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabContent>
            <TabContent id="tab3" activeTab={activeTab}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b-2 border-gray-300">
                      <th className="w-24 py-4 text-center align-middle text-xl font-bold text-[#333333]">
                        Gram
                      </th>
                      <th className="w-24 py-4 text-center align-middle text-xl font-bold text-[#333333]">
                        24K Gold Price
                      </th>
                      <th className="w-24 py-4 text-center align-middle text-xl font-bold text-[#333333]">
                        Daily Price Change
                      </th>
                    </tr>
                    <tr className="border-b-2 border-gray-200 text-center">
                      <td className="py-4 font-semibold  text-[#333333]">
                        1 Gram
                      </td>
                      <td className="py-4 font-semibold text-[#333333] ">
                        12930 <span className="ml-2 text-xs">PKR</span>
                      </td>
                      <td className="flex items-center justify-center py-4 font-semibold text-[#333333]">
                        +0.54%
                        <span className="ml-6">
                          <RedArrow />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldRatesGeneral;
