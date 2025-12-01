/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./button";

export default function Card1 ({ title, description, buttonText, Icon })  {
  return (
    <div className="max-w-sm bg-[#252525] hover:shadow-green-500 rounded-xl shadow-lg hover:scale-105 p-6 ">
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mb-4">
        <Icon className="text-[#050505] text-2xl " />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-white mb-4">{description}</p>

      {/* Button */}
        <Button buttonText={buttonText}/>
    </div>
  );
};


