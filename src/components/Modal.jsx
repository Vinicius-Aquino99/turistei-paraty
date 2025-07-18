const Modal = ({ isOpen, setIsOpen, passeio }) => {
  if (!passeio) return null;

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 w-lvw h-lvh bg-lime-950/80 flex justify-center items-center z-50'>
      <div className='w-[80%] max-w-lg bg-lime-200 p-6 text-lime-900 rounded-lg shadow-lg relative'>
        <h2 className="text-2xl font-bold mb-2">{passeio.nome}</h2>
        <p className="mb-4">{passeio.descricao}</p>
        <p><strong>Duração:</strong> {passeio.duracao}</p>
        <p><strong>Preço:</strong> R$ {passeio.preco.toFixed(2).replace('.', ',')}</p>
        <p><strong>Dificuldade:</strong> {passeio.dificuldade}</p>
        <p><strong>Categoria:</strong> {passeio.categoria}</p>

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
