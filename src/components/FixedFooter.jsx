import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function FixedFooter() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-green-500 text-white px-4 py-3 z-50 rounded-2xl md:rounded-t-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 md:pl-12">
        {/* Text Section */}
        <div className="text-center md:text-left text-sm md:text-base">
          <span className="font-semibold">It’s Live!</span>
          <span className="ml-1">
            Download <span className="text-white font-semibold">App</span> App Now
          </span>
        </div>

        {/* Button Section */}
        <div className="flex   gap-2 md:pr-12">
          <a
            href="#"
            className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg"
          >
            <FaGooglePlay className="text-xl" />
            <div className="text-left leading-tight text-xs">
              <div className="text-gray-400">GET IT ON</div>
              <div className="font-semibold text-white">Google Play</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-2 bg-black px-3 py-2 rounded-lg"
          >
            <FaApple className="text-xl" />
            <div className="text-left leading-tight text-xs">
              <div className="text-gray-400">Download on the</div>
              <div className="font-semibold text-white">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
