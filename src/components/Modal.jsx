const Modal = ({ darkMode, setIsOpen, passeio }) => {
  if (!passeio) return null;

  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 w-lvw h-lvh flex justify-center items-center z-50 py-4
    ${darkMode ?  'bg-gray-900/50' : 'bg-lime-800/80'}`}>
      <div className={`w-[90%] max-w-lg p-6 rounded-lg shadow-lg relative max-h-screen overflow-y-auto pt-6 scrollbar z-51
        ${darkMode ? 'bg-gray-800 text-yellow-200' : 'bg-yellow-200 text-lime-900'}`}>
        <img
          src={passeio.img}
          alt="foto mergulhador de cilindro"
          className="rounded-lg mb-2"
        />
        <h2 className="text-2xl font-bold mb-2">{passeio.nome}</h2>
        <p className={`mb-4 ${darkMode? 'text-yellow-200' : 'text-lime-800'}`}>{passeio.descricao}</p>
        <h3 className="text-lg font-bold mb-2">Ponto de Encontro:</h3>
        <div className="w-full h-[450px] mb-4">
          <iframe
            src={passeio.urlMapa}
            width="100%"
            height="100%"
            className="border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa do Google"
          ></iframe>
        </div>
        <p>
          <strong>Duração:</strong> {passeio.duracao}
        </p>
        <p>
          <strong>Preço:</strong> R${" "}
          {passeio.preco.toFixed(2).replace(".", ",")}
        </p>
        <p>
          <strong>Dificuldade:</strong> {passeio.dificuldade}
        </p>
        <p>
          <strong>Categoria:</strong> {passeio.categoria}
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 px-4 py-2 bg-lime-800 text-white rounded hover:bg-lime-900 transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
