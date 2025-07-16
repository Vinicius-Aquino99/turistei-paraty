import { useState } from "react";
import Passeio from "./components/Passeio";
import Navbar from "./components/Navbar";
import { passeios } from "./data";
const categoriasUnicas = [
  "Todos",
  ...new Set(passeios.map((p) => p.categoria)),
];

function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPasseios = passeios.filter((p) => {
    const matchCategoria =
      activeCategory === "Todos" || p.categoria === activeCategory;

    const termo = searchTerm.toLowerCase();
    const matchTexto =
      p.nome.toLowerCase().includes(termo) ||
      p.descricao.toLowerCase().includes(termo) ||
      p.categoria.toLowerCase().includes(termo);

    return matchCategoria && matchTexto;
  });

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900" : "bg-lime-300 text-black"
      } min-h-screen pt-20 px-6 transition-colors duration-300`}
    >
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        categorias={categoriasUnicas}
      />

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar passeio por nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`text-center px-4 py-2 rounded-full shadow-md focus:outline-none w-full max-w-md transition-colors duration-300
      ${
        darkMode
          ? "bg-gray-700 text-white placeholder-yellow-300"
          : "bg-yellow-200 text-lime-950 placeholder-lime-950"
      }
    `}
        />
      </div>

      <div className="flex flex-col gap-8 items-center">
        {filteredPasseios.map((passeio) => (
          <Passeio
            key={passeio.id}
            image={passeio.img}
            nome={passeio.nome}
            descricao={passeio.descricao}
            dificuldade={passeio.dificuldade}
            duracao={passeio.duracao}
            preco={passeio.preco}
            categoria={passeio.categoria}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
