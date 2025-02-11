import { useContext } from "react";

import ThemeContext from "../themeProvider/ThemeContext";

const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <footer className={`${theme === "light" ? 'bg-gray-50' : 'bg-black' } overflow-hidden relative`}>
      {/* Decorative Top Bar */}
      <div className={`absolute top-0 left-0 w-full h-10 bg-green-400`}></div>

      {/* Background SVG */}
      <div className="absolute -bottom-10 left-0 w-full h-full opacity-20">
        <svg
          viewBox="0 0 1200 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path d="M1200 0L0 250H1200V0Z" fill="url(#paint0_linear)" className="text-gray-300" />
          <defs>
            <linearGradient id="paint0_linear" x1="600" y1="0" x2="600" y2="250" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9CA3AF" />
              <stop offset="1" stopColor="#D1D5DB" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto py-12 px-6 flex flex-col md:flex-row md:justify-between md:items-start gap-8 relative z-10 text-center md:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">

            <h1 className={`${theme === 'light' ? " text-gray-800": "text-white"}font-bold text-3xl`}>
              Study<span className="text-green-500">Stream</span>
            </h1>
          </div>
          <p className={`${theme === 'light' ? " text-gray-600": "text-white"} mt-2 max-w-xs` }>
            Your partner in seamless assignment management and learning.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className={`${theme === 'light' ? " text-gray-600": "text-white"} mt-2 max-w-xs` }>Contact Us</h2>
          <p className={`${theme === 'light' ? " text-gray-600": "text-white"} mt-2 max-w-xs` }>📍 Motijheeel C/A Dhaka-1200</p>
          <p className={`${theme === 'light' ? " text-gray-600": "text-white"} mt-2 max-w-xs` }>
            ✉️ <a href="mailto:hello@studystream.io" className="underline hover:text-green-500">hello@studystream.io</a>
          </p>
          <p className={`${theme === 'light' ? " text-gray-600": "text-white"} mt-2 max-w-xs` }>📞 01521203296</p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className={`${theme === 'light' ? " text-gray-600": "text-white"} mt-2 max-w-xs` }>Quick Links</h2>
          <div className="flex flex-col gap-2">
            <a href="#" className={`${theme === 'light' ? " text-gray-600 hover:text-green-400": "text-white"} mt-2 max-w-xs` }>Home</a>
            <a href="#" className={`${theme === 'light' ? " text-gray-600 hover:text-green-400": "text-white"} mt-2 max-w-xs` }>About Us</a>
            <a href="#" className={`${theme === 'light' ? " text-gray-600 hover:text-green-400": "text-white"} mt-2 max-w-xs` }>Privacy Policy</a>
            <a href="#" className={`${theme === 'light' ? " text-gray-600 hover:text-green-400": "text-white"} mt-2 max-w-xs` }>Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={` ${theme === 'light' ? 'bg-gray-100': 'bg-black'} py-4 border-t border-gray-200 text-gray-500 relative z-10 text-center`}>
        <p className={`${theme === 'light'? "text-black": "text-white"}`}>
          Copyright © {new Date().getFullYear()} | Powered by <span className="font-bold text-green-500">StudyStream</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
