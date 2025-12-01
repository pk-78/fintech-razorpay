import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderLinks = () => {
    return (
      <>
        <li className="relative hover:text-green-400 transition hover:cursor-pointer">
          Home
        </li>
        <li className="relative hover:text-green-400 transition hover:cursor-pointer">
          Payment
        </li>
        <li className="relative hover:text-green-400 transition hover:cursor-pointer">
          Banking
        </li>
        <li className="relative hover:text-green-400 transition hover:cursor-pointer">
          Partners
        </li>
        <li className="relative hover:text-green-400 transition hover:cursor-pointer">
          Resource
        </li>
      </>
    );
  };

  return (
    <nav className=" relative flex justify-between items-center px-6 md:px-32 py-6">
      <div className="flex items-center gap-2">
        <img
          src="/itslogo.png"
          alt="Logo"
          className="w-8 h-8 md:w-24 md:h-24"
        />
      </div>

      {/* desktop menu */}
      <div>
        <ul className="hidden md:flex  gap-6 md:gap-10 text-white font-medium md:text-lg text-sm">
          {renderLinks()}
        </ul>
      </div>

      {/* mobile menu */}

      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6 text-green-500" />
          ) : (
            <FaBars className="w-6 h-6 text-green-500" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#252525] border-t border-green-200 flex flex-col items-start px-6 py-4 space-y-4 md:hidden shadow-md z-40 opacity-100">
          <ul className="flex flex-col gap-4 text-white font-medium text-sm">
            {renderLinks()}
          </ul>
        </div>
      )}
    </nav>
  );
}
