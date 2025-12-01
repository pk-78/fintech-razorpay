import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function LandingPage() {
  return (
    <div className="relative  text-white min-h-screen font-sans">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-green-400 to-green-500 rounded-full opacity-100 -translate-x-1/2 translate-y-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border-2 border-green-400 rounded-full opacity-70 -translate-x-1/2 translate-y-1/2 z-0" />

      {/* navbar */}
      {/* <nav className="md:flex justify-between items-center px-6 md:px-32 py-6">
        <div className="flex items-center gap-2">
          <img
            src="/share sampatti logo.png"
            alt="Logo"
            className="w-8 h-8 md:w-24 md:h-24"
          />
        </div>
        <ul className="flex gap-6 md:gap-10 text-white font-medium md:text-lg text-sm">
          {["Home", "Wishlist", "Invest", "Portfolio", "Properties"].map(
            (item) => (
              <li
                key={item}
                className="relative hover:text-green-400 transition hover:cursor-pointer"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </nav> */}

      {/* Hero Section */}
      <section className=" relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-32 py-12 md:py-20 gap-10 z-10">
        {/* Left: Text */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl font-fa md:text-5xl font-Inter font-extrabold leading-snug inline drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]">
           Easy In-Store Payment <br />
            
          </h1>
          <h1 className="text-3xl md:text-5xl font-Inter font-extrabold leading-snug inline ">
            {" "}
            <span className="text-green-500 drop-shadow-[0_0_2px_rgba(34,197,94,0.8)]  ">for Indias boldest disruptors</span>{" "}
          </h1>

          <p className="text-lg text-gray-300 z-10">
            Accept card, Bank transfer and Apple Pay <br />
            from 180+ countries
          </p>
          <button className="bg-green-800 hover:bg-[#252525] hover:cursor-pointer text-white font-semibold px-6 py-3 rounded-full transition shadow-md flex">
            Get started{" "}
            <span className=" text-2xl">
              <MdOutlineKeyboardArrowRight />
            </span>
          </button>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./mainpageraz.png"
            alt="Image"
            className="w-full max-w-md"
          />
        </div>
      </section>
    </div>
  );
}
