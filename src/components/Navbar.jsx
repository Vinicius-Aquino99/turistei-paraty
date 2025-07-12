const Navbar = ({ activeCategory, setActiveCategory }) => {
  const categories = ["Todos", "Aventura", "Passeio de Barco", "Trilha"];
  
  return (
    <nav className="flex flex-row justify-center bg-yellow-200 fixed top-0 left-0 w-full py-1 shadow-md z-50">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-2 py-1 rounded-full transition-all ${
            activeCategory === category 
              ? "bg-lime-700 text-yellow-200 font-bold" 
              : "hover:bg-lime-100"
          }`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;