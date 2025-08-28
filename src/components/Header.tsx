import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 긴급 상태 배너 */}
      <div className="w-full bg-gray-900 text-white text-center py-2 fixed top-0 left-0 z-50">
        <style jsx>{`
          @keyframes text-flash {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0.2;
            }
          }
          .flash-text {
            animation: text-flash 1.5s infinite;
          }
        `}</style>
        <span className="font-bold flash-text">⚡ URGENT - RECRUITING NOW</span>
      </div>
      <nav
        className={`w-full fixed top-8 left-0 z-40 flex items-center justify-between px-4 sm:px-8 py-3 transition-colors transition-shadow duration-300
          ${scrolled ? "bg-white shadow" : "bg-transparent shadow-none"}
        `}
      >
        {/* Left: Logo + Site Name */}
        <div className="flex items-center space-x-2 min-w-0">
          {/* 지구본 아이콘 (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={scrolled ? "#7B1FA2" : "#fff"}
            className="w-7 h-7 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c2.21 0 4 4.03 4 9s-1.79 9-4 9-4-4.03-4-9 1.79-9 4-9zm0 0v18"
            />
          </svg>
          <span
            className={`font-bold text-lg select-none transition-colors duration-300 truncate ${
              scrolled ? "text-purple-700" : "text-white"
            }`}
          >
            Korea-ASEAN Digital Academy
          </span>
        </div>
        {/* Center: Menu (md 이상에서만 보임) */}
        <div
          className={`hidden md:flex space-x-8 font-medium transition-colors duration-300 ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <a
            href="#eligibility"
            className={`transition-colors duration-300 ${
              scrolled ? "hover:text-purple-700" : "hover:text-purple-200"
            }`}
          >
            Eligibility
          </a>
          <a
            href="#selection"
            className={`transition-colors duration-300 ${
              scrolled ? "hover:text-purple-700" : "hover:text-purple-200"
            }`}
          >
            Selection
          </a>
          <a
            href="#curriculum"
            className={`transition-colors duration-300 ${
              scrolled ? "hover:text-purple-700" : "hover:text-purple-200"
            }`}
          >
            Curriculum
          </a>
          <a
            href="#benefits"
            className={`transition-colors duration-300 ${
              scrolled ? "hover:text-purple-700" : "hover:text-purple-200"
            }`}
          >
            Benefits
          </a>
        </div>
        {/* Right: Apply Now Button (항상 보임) */}
        <a
          href="https://forms.gle/Jc3dMrgf6wu5w4h27"
          target="_blank"
          rel="noopener noreferrer"
          className={`font-semibold px-6 py-2 rounded-full shadow transition-colors duration-300 ml-2
          ${
            scrolled
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "bg-white bg-opacity-20 hover:bg-opacity-40 text-white border border-white"
          }
        `}
          style={{ whiteSpace: "nowrap" }}
        >
          Apply Now
        </a>
      </nav>
    </>
  );
};

export default Header;
