import React from "react";
import Card2 from "./Card2";
import { FaCoins } from "react-icons/fa";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { IoMdPie } from "react-icons/io";

export default function HomeThirdComponent() {
  return (
    <div className="lg:flex justify-center p-10 lg:p-20 gap-y-6 lg:gap-10">
      <Card2
        Icon={FaCoins}
        title="Buisness Consultancy"
        description="Our business consultancy services not only guide you in the right direction but also help you make smart and strategic investments."
      />

      <div className="max-w-sm w-full bg-linear-to-r from-green-500 to-green-700 hover:scale-105 hover:shadow-gray-300 rounded-xl shadow-lg p-6 my-4 md:my-0 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-3 rounded-full">
            <CgArrowsExchangeAltV className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <h2 className="text-sm font-semibold text-white mb-2">
          Trading Strategy
        </h2>
        <p className="text-white text-sm p-2">
          A well-planned trading strategy is the backbone of smart investment.
          In today's dynamic financial markets, success.
        </p>
      </div>
      <Card2
        Icon={IoMdPie}
        title="Marketing Evaluation"
        description="Effective marketing begins with clear evaluation. Investing in marketing without understanding what doesn't can lead to wasted resources."
      />
    </div>
  );
}
