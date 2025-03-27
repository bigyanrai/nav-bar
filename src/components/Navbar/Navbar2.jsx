import { useState } from "react";
import navData from "../../data/navData.json";
import { Link } from "react-router-dom";

function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="border-1 border-black">
      <nav className="border-1 border-neutral-400">
        <div className="flex items-center">
          <img
            src={navData.logo.url}
            alt={navData.logo.text}
            className="h-8 md:h-9 lg:h-10 w-auto"
          />
        </div>

        <ul className="absolute lg:flex lg:w-auto lg:space-x-6">
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
                              border border-black
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
      </nav>
    </div>
  );
}

export default Navbar2;
