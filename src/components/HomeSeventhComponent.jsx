import React from "react";

export default function HomeSeventhComponent() {
  return (
    <div className="relative z-10 bg-black  ">
      {/* leftPAart */}
      <div className="px-6 md:px-32 py-6 md:py-28 md:flex">
        <div className="md:pr-20 pb-2 relative">
          <div className="border-2 border-green-600 h-[375px] w-[325px] md:h-[450px] md:w-[400px]"></div>
          <img
            src="./brown-desktop-with-coffee.jpg" // replace with your actual path
            alt=""
            className="absolute top-3 left-3 w-[325px] h-[375px] md:w-[400px] md:h-[450px] shadow-xl object-cover"
          />
        </div>

        {/* rightPart */}
        <div className="md:pl-20">
          <p className="text-3xl text-green-500 font-bold w-fit  py-1">
            Supercharge your business with Galactipay
          </p>
          <div className="pt-6">
            <p className="font-bold text-white text-3xl"></p>
            <p className="font-bold text-3xl">informed investments decision</p>
          </div>
          <p className="pt-6 text-white">
            Galactipay is the only payments solution in India that allows
            businesses to accept, process and disburse payments with its product
            suite. It gives you access to all payment modes including credit
            card, debit card, netbanking, UPI and popular wallets including
            JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>
          <div className="w-full h-0.5 mt-4 bg-white"></div>
          <div className="py-4 grid grid-cols-2">
            <div className="mb-8">
              <p className="text-white font-semibold">Expert Guidance</p>
              <p className="text-sm pr-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia et rerum ea consequuntur sapiente optio earum quia nemo
                voluptatem fugit?
              </p>
            </div>
            <div>
              <p className="text-white font-semibold">Best Teamwork</p>
              <p className="text-sm pr-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia et rerum ea consequuntur sapiente optio earum quia nemo
                voluptatem fugit?
              </p>
            </div>
            <div>
              <p className="text-white font-semibold">Trusted Platform</p>
              <p className="text-sm pr-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia et rerum ea consequuntur sapiente optio earum quia nemo
                voluptatem fugit?
              </p>
            </div>
            <div>
              <p className="text-white font-semibold">Support 24/7</p>
              <p className="text-sm pr-4 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia et rerum ea consequuntur sapiente optio earum quia nemo
                voluptatem fugit?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
