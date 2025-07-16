import { motion } from 'framer-motion';
import { FaClock, FaMoneyBillWave, FaStar } from 'react-icons/fa';

const Passeio = ({ id, image, nome, descricao, dificuldade, duracao, preco, categoria, darkMode }) => {
  const difficultyColors = {
    Fácil: "bg-green-500",
    Médio: "bg-yellow-500",
    Difícil: "bg-red-500"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={`passeio flex flex-col md:flex-row w-full max-w-4xl gap-6 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-shadow relative ${darkMode ?  'bg-gray-800' : 'bg-yellow-200'}`}
    >
      <img 
        src={image}
        alt={`Foto do passeio ${nome}`} 
        className="w-full md:w-[250px] h-[200px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
      />

      <div className="flex flex-col gap-3 flex-1">
        <div className="flex justify-between items-start">
          <h3 className={`text-2xl font-bold ${darkMode ? 'text-yellow-200': 'text-lime-900' }`}>{nome}</h3>
          <span className={`px-3 py-1 text-sm rounded-full ${difficultyColors[dificuldade]} text-white`}>
            {dificuldade}
          </span>
        </div>

        <span className={`${darkMode ? 'text-yellow-400' : 'text-lime-700 '} text-sm`}>{categoria}</span>
        <p className={`${darkMode ? 'text-yellow-200' : 'text-lime-900'}`}>{descricao}</p>

        <div className={`${darkMode ? 'text-yellow-100' : 'text-gray-950'} flex flex-wrap gap-4 mt-2 text-sm`}>
          <div className="flex items-center gap-1">
            <FaClock />
            <span className="font-semibold">Duração:</span>
            <span>{duracao}</span>
          </div>
          <div className={`flex items-center gap-1`}>
            <FaMoneyBillWave />
            <span className={`font-semibold`}>Valor:</span>
            <span >R$ {typeof preco === 'number' ? preco.toFixed(2).replace('.', ',') : preco}</span>
          </div>
        </div>

        <motion.a
          whileTap={{ scale: 0.95 }}
          href={`/agendar/${id}`}
          className="bg-lime-800 px-6 py-2 text-yellow-200 text-center rounded-2xl hover:bg-lime-900 hover:scale-105 transition-all duration-300 mt-4 self-end"
        >
          Agendar
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Passeio;