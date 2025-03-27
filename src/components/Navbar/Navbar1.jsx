import React, { useState } from "react";
import navData from "../../data/navData.json";
import { Link, useLocation } from "react-router-dom";

function Navbar1({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow-sm py-4 px-4 md:px-6 lg:px-8 border border-black relative">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo - centered when menu is open (mobile), part of flex-evenly on desktop */}
          <div className={`${isMenuOpen ? "w-full flex justify-center" : ""}`}>
            <img
              src={navData.logo.url}
              alt={navData.logo.text}
              className="min-w-[85px] h-8 md:h-9 lg:h-10 w-auto"
            />
          </div>

          {/* Navigation links - Desktop (equally spaced with logo) */}
          <ul className="hidden lg:flex lg:flex-1 lg:justify-evenly lg:items-center">
            {navData.links.map((link, index) => {
              const isActive = location.pathname === link.url;
              return (
                <li key={index}>
                  <Link
                    to={link.url}
                    className={`
                      flex items-center justify-center
                      h-[38px] w-[138px]
                      p-[10px] rounded-[70px]
                      text-base
                      ${
                        isActive
                          ? "bg-[#E1E5E833] text-black"
                          : "hover:bg-gray-100"
                      }
                      transition-all duration-300 ease-in-out
                      hover:bg-[#E1E5E833]
                      hover:scale-105
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger menu button (hidden on desktop) */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay (right sidebar) */}
        {isMenuOpen && (
          <>
            {/* Dark overlay */}
            {children}
            {/* <div
              className="fixed inset-0 bg-gray-300 bg-opacity-20 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            /> */}

            {/* Mobile menu sidebar (right-aligned) */}
            <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out lg:hidden">
              <div className="flex justify-end p-4">
                <button
                  className="focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="mt-4 space-y-4 px-4">
                {navData.links.map((link, index) => {
                  const isActive = location.pathname === link.url;
                  return (
                    <li key={index}>
                      <Link
                        to={link.url}
                        className={`
                          flex items-center justify-start
                          h-[38px] w-full
                          p-[10px] rounded-[70px]
                          text-sm md:text-base
                          ${
                            isActive
                              ? "bg-[#E1E5E833] text-black"
                              : "hover:bg-gray-100"
                          }
                          transition-all duration-300 ease-in-out
                          hover:bg-[#E1E5E833]
                        `}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar1;
