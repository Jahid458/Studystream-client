

const Footer = () => {
  return (
    <footer className="relative bg-gray-50 overflow-hidden">
    {/* Top Green Curved Line */}
    <div className="absolute top-0 left-0 w-full h-10 bg-green-400 rounded-tl-full rounded-tr-full"></div>

    {/* Middle Rays */}
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

    {/* Footer Content */}
    <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
      {/* Left Section */}
      <div>
        <h1 className="font-bold text-3xl flex items-center gap-2">
        
          <span>
            Study<span className="text-green-500">Stream</span>
          </span>
        </h1>
      </div>

      {/* Middle Section */}
      <div className="space-y-2">
        <p className="text-gray-600 font-medium">
          📍 30 N Gould St STE R Sheridan, WY 82801, USA.
        </p>
        <p className="text-gray-600 font-medium">
          ✉️{" "}
          <a
            href="mailto:hello@studystream.io"
            className="underline hover:text-green-500"
          >
            hello@studystream.io
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="space-y-2">
        <p>
          <a href="#" className="text-gray-700 hover:text-green-400">
            Website
          </a>
        </p>
        <p>
          <a href="#" className="text-gray-700 hover:text-green-400">
            Facebook
          </a>
        </p>
        <p>
          <a href="#" className="text-gray-700 hover:text-green-400">
            LinkedIn
          </a>
        </p>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="text-center py-4 border-t border-gray-200 text-gray-500 relative z-10">
      <p>
        Copyright © 2025 | A Brand From{" "}
        <span className="font-bold text-green-500">studyStream</span>
      </p>
    </div>

  </footer>
  );
};

export default Footer;
