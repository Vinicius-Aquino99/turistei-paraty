import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({
  activeCategory,
  setActiveCategory,
  darkMode,
  setDarkMode,
  categorias,
}) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-2 px-4 flex justify-between items-center shadow-md backdrop-blur-md
      ${darkMode ? "bg-gray-800/80 text-white" : "bg-yellow-200/80 text-black"}
    `}
    >
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
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
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 text-lg hover:scale-110 transition-transform"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
};

export default Navbar;
