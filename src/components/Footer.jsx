import logo from "/studystream.png";


const Footer = () => {
  return (
    <footer className="relative bg-gray-50 overflow-hidden">
  
      <div className="absolute top-0 left-0 w-full h-10 bg-green-400 rounded-tl-full rounded-tr-full"></div>
      <div className="absolute -bottom-10 left-0 w-full h-full opacity-20">
        <svg
          viewBox="0 0 1200 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M1200 0L0 250H1200V0Z"
            fill="url(#paint0_linear)"
            className="text-gray-300"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="600"
              y1="0"
              x2="600"
              y2="250"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9CA3AF" />
              <stop offset="1" stopColor="#D1D5DB" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
  
        <div>
          <div className="flex gap-2">
           <img src={logo} className="w-14" />
          <h1 className="font-bold text-3xl text-gray-800 flex items-center gap-2">
            Study<span className="text-green-500">Stream</span>
          </h1>
          </div>
          <p className="text-gray-600 mt-2">
            Your partner in seamless assignment management and learning.
          </p>
        </div>


        <div className="space-y-4">
          <h2 className="font-semibold text-gray-800">Contact Us</h2>
          <p className="text-gray-600">
            📍 Motijheeel C/A Dhaka-1200
          </p>
          <p className="text-gray-600">
            ✉️{" "}
            <a
              href="mailto:hello@studystream.io"
              className="underline hover:text-green-500"
            >
              hello@studystream.io
            </a>
          </p>
          <p className="text-gray-600">📞 01521203296</p>
        </div>


        <div className="space-y-4">
          <h2 className="font-semibold text-gray-800">Quick Links</h2>
          <p>
            <a href="#" className="text-gray-700 hover:text-green-400">
              Home
            </a>
          </p>
          <p>
            <a href="#" className="text-gray-700 hover:text-green-400">
              About Us
            </a>
          </p>
          <p>
            <a href="#" className="text-gray-700 hover:text-green-400">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="#" className="text-gray-700 hover:text-green-400">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-100 py-4 border-t border-gray-200 text-gray-500 relative z-10 text-center">
        <p>
          Copyright © {new Date().getFullYear()} | Powered by{" "}
          <span className="font-bold text-green-500">StudyStream</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
