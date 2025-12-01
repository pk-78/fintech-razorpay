import React from "react";
import Button from "./button";

export default function HomeSecondComponent() {
  return (
    <div className="relative ">
      {/* leftPAart */}
      <div className="px-6 md:px-32 py-6  md:flex">
        <div className="md:pr-20 pb-2 relative w-fit mx-auto">
          <div className=" border-3 border-green-600 h-[375px] w-[325px] md:h-[450px] md:w-[400px]"></div>
          <img
            src="./brown-desktop-with-coffee.jpg" // replace with your actual path
            alt=""
            className="absolute -top-3 left-3 w-[325px] h-[375px] md:w-[400px] md:h-[450px] shadow-xl object-cover"
          />
        </div>

        {/* rightPart */}
        <div className="md:pl-20">
          <p className=" w-fit font-bold py-1 text-2xl text-green-500">
            Start your search
          </p>
          <div className="pt-6">
            <p className="font-bold text-white text-3xl">
              ₹30L in benefits
            </p>
            <p className="font-bold text-white text-3xl">
              with Galactipay Startup Perks
            </p>
          </div>
          <p className="pt-6 text-white">
            Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Galactipay.
          </p>
          <div className="py-4">
            <div className="pt-2">
              <div className="flex text-white justify-between">
                <p>Expert Advisors</p>
                {/* <p>80%</p> */}
              </div>
              <div className="relative w-[90%] bg-linear-to-r from-green-500 to-green-600 h-2 rounded-lg flex justify-end">
                <p className="absolute text-white bottom-1">90%</p>
              </div>
            </div>
            <div className="pt-2">
              <div className="flex text-white justify-between">
                <p>Trading Instrument</p>
                {/* <p>60%</p> */}
              </div>
              <div className="relative w-[70%] bg-linear-to-r  from-green-500 to-green-600 h-2 rounded-lg flex justify-end">
                <p className="absolute text-white bottom-1">70%</p>
              </div>
            </div>
            <div className="pt-2">
              <div className="flex text-white justify-between">
                <p>Technical Analysis</p>
                {/* <p>55%</p> */}
              </div>
              <div className="relative w-[55%] bg-linear-to-r  from-green-500 to-green-600 h-2 rounded-lg flex justify-end ">
                <p className="absolute text-white bottom-1">55%</p>
              </div>
            </div>
          </div>
          <Button buttonText="DISCOVER MORE" />
        </div>
      </div>
    </div>
  );
}
