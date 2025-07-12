import { motion } from 'framer-motion';

const Passeio = ({ id, image, nome, descricao, dificuldade, duracao, preco, categoria }) => {
  // Cores baseadas na dificuldade
  const difficultyColors = {
    Fácil: "bg-green-500",
    Médio: "bg-yellow-500",
    Difícil: "bg-red-500"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="passeio flex flex-col md:flex-row w-full max-w-4xl gap-6 shadow-lg shadow-lime-700/30 bg-yellow-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-lime-700/50 transition-shadow"
    >
      <img 
        src={image}
        alt={`Foto do passeio ${nome}`} 
        className="w-full md:w-[250px] h-[200px] object-cover rounded-2xl"
      />
      
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-lime-900">{nome}</h3>
          <span className={`px-3 py-1 text-sm rounded-full ${difficultyColors[dificuldade]} text-white`}>
            {dificuldade}
          </span>
        </div>
        
        <span className="text-sm text-lime-700">{categoria}</span>
        
        <p className="text-gray-700">{descricao}</p>
        
        <div className="flex flex-wrap gap-4 mt-2 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-semibold">Duração:</span>
            <span>{duracao}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold">Valor:</span>
            <span>R$ {typeof preco === 'number' ? preco.toFixed(2).replace('.', ',') : preco}</span>
          </div>
        </div>
        
        <a 
          href={`/agendar/${id}`}
          className="bg-lime-800 px-6 py-2 text-yellow-200 text-center rounded-2xl hover:bg-lime-900 hover:scale-105 transition-all duration-300 mt-4 self-end"
        >
          Agendar
        </a>
      </div>
    </motion.div>
  );
};

export default Passeio;