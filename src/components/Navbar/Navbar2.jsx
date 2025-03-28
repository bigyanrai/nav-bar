import React, { useState } from "react";
import navData from "../../data/navData.json"; // Adjust the path as needed

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Default to home

  const toggleMenu = () => setIsOpen(!isOpen);

  // Calculate the required height for the mobile menu
  const linkCount = navData.links.length;
  const linkHeight = 40; // Approximate height per link (py-2 = 16px + content height, rounded up)
  const gapHeight = 8; // space-y-2 = 0.5rem = 8px
  const paddingHeight = 32; // pt-4 + pb-4 = 16px + 16px = 32px
  const totalHeight =
    linkCount * linkHeight + (linkCount - 1) * gapHeight + paddingHeight;

  return (
    <>
      {/* Spacer div to reserve space in the document flow */}
      <div className="h-16" aria-hidden="true"></div>

      {/* Fixed Navbar */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="font-inter font-bold text-xl text-gray-900 dark:text-white">
                <img
                  src={navData.logo.url}
                  alt={navData.logo.text}
                  className=""
                />
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {navData.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    onClick={() => setActiveLink(link.url)}
                    className={`font-inter text-sm ${
                      activeLink === link.url
                        ? "text-gray-900 dark:text-white font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    } transition-colors duration-200`}
                    aria-current={activeLink === link.url ? "page" : undefined}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
                    }`}
                  ></span>
                  <span
                    className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white dark:bg-gray-900`}
          style={{ maxHeight: isOpen ? `${totalHeight}px` : "0px" }}
        >
          <div className="px-4 pt-4 pb-4 space-y-2">
            {navData.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                onClick={() => {
                  setActiveLink(link.url);
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-inter ${
                  activeLink === link.url
                    ? "text-gray-900 dark:text-white font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                } transition-colors duration-200`}
                aria-current={activeLink === link.url ? "page" : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
