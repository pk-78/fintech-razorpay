import React from "react";

export default function HomeNinthComponent() {
  return (
    <section className="relative h-[500px] flex items-center justify-start bg-gray-900 text-white ">
      {/* Background Image */}
      <div className="flex">
        <div className="bg-black w-[]"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)),url('/team meeting.png')",
          }}
        ></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 "></div>

      {/* Content */}
      <div className="relative  z-10 max-w-2xl px-8 lg:px-32">
        <h1 className="text-3xl md:text-3xl font-bold leading-tight mb-6">
          We offer the best possible profitability through a good management
          service
        </h1>
        <p className="text-gray-300 mb-8 text-sm">
          Sapien ornare nostra fermentum venenatis fringilla faucibus auctor
          sidonec vulputate man montes leti mattis diam aenean parturient.
        </p>

        {/* Email input & button */}
        <form className="flex  max-w-md">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 px-4 py-2 text-gray-800 bg-white focus:outline-none"
          />
          <button
            className="bg-linear-to-r from-green-500 to-green-700 hover:from-green-300 hover:to-green-200  text-white text-sm px-4 py-1 hover:bg-white hover:text-green-900 hover:border-[#34D399] transition-colors cursor-pointer"
            type="submit"
          >
            GET A QUOTE
          </button>
        </form>
      </div>
    </section>
  );
}
