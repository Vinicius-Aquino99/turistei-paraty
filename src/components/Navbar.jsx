import { useState } from "react";
import { FaMoon, FaSun, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({
  activeCategory,
  setActiveCategory,
  darkMode,
  setDarkMode,
  categorias,
}) => {
  return (
    <nav
      className={` fixed top-0 left-0 w-full z-50 py-2 px-4 flex justify-between items-center shadow-md backdrop-blur-md
      ${darkMode ? "bg-gray-800/80 text-white" : "bg-yellow-200/80 text-black"}
    `}
    >
      <div className="flex gap-2 overflow-x-auto scrollbar w-full ">
        {categorias.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1 rounded-full whitespace-nowrap transition-all duration-200 text-sm
      ${
        activeCategory === category
          ? "bg-lime-700 text-yellow-200 font-bold"
          : "hover:text-lime-100 hover:bg-lime-700"
      }
    `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dark mode toggle */}
      <div className="flex w-full justify-end gap-12 text-lime-900 flex-1">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 text-lg hover:scale-110 transition-transform"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <Link to="/turistei-paraty/LoginPage" className="hover:scale-110 text-lg cursor-default transition-transform">
          <FaUser />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
