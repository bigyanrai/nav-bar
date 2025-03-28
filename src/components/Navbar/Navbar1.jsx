import React, { useState } from "react";
import navData from "../../data/navData.json";
import { Link, useLocation } from "react-router-dom";

function Navbar1() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Fixed Navbar at top */}
      <nav className="bg-white shadow-lg py-4 px-4 md:px-6 lg:px-8 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div>
            <img
              src={navData.logo.url}
              alt={navData.logo.text}
              className="min-w-[85px] h-8 md:h-9 lg:h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
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
                      ${isActive ? "text-[#087DC2]" : "text-black"}
                      hover:text-[#087DC2]
                      transition-all duration-300 ease-in-out
                      hover:text-[1.075rem]
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger Button */}
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
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu and Overlay */}
      {isMenuOpen && (
        <>
          {/* Blur overlay for content - Hidden on lg and above */}
          <div
            className="lg:hidden fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Mobile Menu Sidebar */}
          <div className="lg:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out">
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
                        ${isActive ? "text-[#087DC2]" : "text-black"}
                        hover:text-[#087DC2]
                        transition-all duration-300 ease-in-out
                        hover:text-[1.075rem]
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

      {/* Content with proper spacing and opacity transition */}
      <div
        className={`mt-16 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-30" : "opacity-100"
        }`}
      ></div>
    </>
  );
}

export default Navbar1;
