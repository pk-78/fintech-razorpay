import React from "react";

export default function Button({buttonText}) {
  return (
    <button className="bg-linear-to-r from-green-500 to-green-700 hover:from-transparent hover:to-transparent  text-white text-sm px-2 py-1  rounded-md hover:bg-green-900   transition-colors">
      {buttonText}
    </button>
  );
}
