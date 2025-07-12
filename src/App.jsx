import { useState } from "react";
import Passeio from "./components/Passeio";
import Navbar from "./components/Navbar";

const passeios = [
{
  id: 1,
  img: 'https://media-cdn.tripadvisor.com/media/photo-s/08/03/59/63/una-dive.jpg',
  nome: "Mergulho de Cilindro",
  descricao: "Mergulho de cilindro para todos os níveis de experiência! Venha conhecer o fundo do mar de Paraty e se surpreenda com o que verá!",
  duracao: '30min*',
  categoria: "Aventura",
  preco: 630,
  dificuldade: "Fácil",
  empresas: ["Dive1", "Dive2"]
},
{
  id: 2,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLogpyiLFp9S7V8sEot49ZRw2c4ITvHNaZMh8Hq_HKkaxn1lMigEDm0H-mejcEqW88LNI&usqp=CAU',
  nome: "Ilhas de Paraty",
  descricao: 'Passeio de lancha pelas ilhas de Paraty. Venha conhecer esse lugar histórico cheio de curiosidades e belezas naturais!',
  duracao: '7h',
  categoria: "Passeio de Barco",
  preco: 250,
  dificuldade: "Fácil",
  empresas: ["Agência 1", "Agência 2"]
},
{
  id: 3,
  img: 'https://paratybooking.com.br/wp-content/uploads/2020/01/caminho-do-ouro-em-paraty_gold-trail-paraty.png',
  nome: "Caminho do Ouro",
  descricao: "Por aqui o ouro saiu. Conheça o caminho do ouro, trecho por dentro da Serra da Bocaina, rodeado de natureza selvagem e história colonial",
  duracao: '8h',
  categoria: "Trilha",
  preco: 180,
  dificuldade: "Difícil",
  empresas: ["Guia 1", "Guia 2"]
},
{
  id: 4,
  img: 'https://euamoparaty.com.br/wp-content/uploads/euamoparaty_12leva20210222_web@fotosincriveis.com_.br-272.jpg',
  nome: "Pico do Pão de Açúcar",
  descricao: "Trilha dentro do Saco do Mamanguá, único fiorde tropical do Brasil. Venha conhecer essa paisagem com a melhor equipe de turismo!",
  duracao: '2h',
  categoria: "Trilha",
  preco: '2.200',
  dificuldade: "Médio",
  empresas: ["Guia 1", "Guia 2"]
},
{
  id: 5,
  img: 'https://live.staticflickr.com/7188/6833718186_425946b99a_b.jpg',
  nome: "Arvorismo",
  descricao: "Aventura em meio a natureza! Aqui você se reconecta com seu instinto interior, com nossos circuitos de arvorismo completamente seguros e desafiadores!",
  duracao: '1h',
  categoria: "Aventura",
  preco: 100,
  dificuldade: "Fácil",
  empresas: ["Guia 1", "Guia 2"]
},
{
  id: 6,
  img: 'https://mediaim.expedia.com/destination/2/f134df4d05755918bfa0dac3c491e62d.jpg',
  nome: "Saco do Mamanguá",
  descricao: "Passeio de lancha por dentro do único fiorde tropical do Brasil! Venha conhecer essa maravilha única que é o Saco do Mamanguá!",
  duracao: '1h',
  categoria: "Passeio de Barco",
  preco: 100,
  dificuldade: "Fácil",
  empresas: ["Guia 1", "Guia 2"]
},
];

function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Filtra passeios por categoria
  const filteredPasseios = activeCategory === "Todos" 
    ? passeios 
    : passeios.filter(passeio => passeio.categoria === activeCategory);

  return (
    <div className="min-h-screen bg-lime-300 p-8 pt-20"> {/* Adicione padding-top para navbar fixa */}
      <Navbar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      <div className="flex flex-col gap-8 items-center">
        {filteredPasseios.map(passeio => (
          <Passeio 
            key={passeio.id}
            id={passeio.id}
            image={passeio.img}
            nome={passeio.nome}
            descricao={passeio.descricao}
            duracao={passeio.duracao}
            preco={passeio.preco}
            dificuldade={passeio.dificuldade}
            categoria={passeio.categoria}
          />
        ))}
      </div>
    </div>
  );
}

export default App;