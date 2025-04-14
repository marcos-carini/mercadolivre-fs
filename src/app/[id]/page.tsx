import NavBar from "../widgets/NavBar";
import TopHeader from "../widgets/TopHeader";

const dados = {
  produto: {
    id: "2",
    titulo: "Smartphone Samsung Galaxy S23",
    descricao: "128GB, Tela 6.1'', Câmera Tripla",
    preco: "3599.99",
    local: "São Paulo, SP",
    url: "samsung-galaxy-s23",
    fotos: [
      {
        id: "1",
        descricao: "Foto do Galaxy S23",
        url: "https://http2.mlstatic.com/D_NQ_NP_969408-MLU75401927010_042024-O.webp",
      },
      {
        id: "2",
        descricao: "Foto do Galaxy S23",
        url: "https://http2.mlstatic.com/D_NQ_NP_969408-MLU75401927010_042024-O.webp",
      },
      {
        id: "3",
        descricao: "Foto do Galaxy S23",
        url: "https://http2.mlstatic.com/D_NQ_NP_969408-MLU75401927010_042024-O.webp",
      },
      {
        id: "4",
        descricao: "Foto do Galaxy S23",
        url: "https://http2.mlstatic.com/D_NQ_NP_969408-MLU75401927010_042024-O.webp",
      },
      {
        id: "5",
        descricao: "Foto do Galaxy S23",
        url: "https://http2.mlstatic.com/D_NQ_NP_969408-MLU75401927010_042024-O.webp",
      },
    ],
  },
};

type Props = {
  params: {
    id: string;
  };
};

export default function Details({ params }: Props) {
  const { id } = params;
  const produto = dados.produto;

  return (
    <div>
      <header className="bg-amber-300">
        <TopHeader />
        <NavBar />
      </header>

      <main>
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="bg-white rounded-2xl shadow p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Grid de imagens */}
            <div className="grid grid-cols-3 gap-2">
              {produto.fotos.map((foto, i) => {
                const firstItem = i == 0 ? "col-span-2 row-span-2" : "";
                return (
                  <div className={firstItem} key={i}>
                    <img
                      key={i}
                      src={foto.url}
                      alt={`Imagem ${i + 2}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                );
              })}
            </div>

            {/* Informações do produto */}
            <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {produto.titulo}
                </h1>
                <p className="text-3xl font-bold text-green-600 mb-4">
                  R$ {produto.preco}
                </p>
                <p className="text-gray-700 mb-4">{produto.descricao}</p>
                <p className="text-sm text-gray-500">
                  Localização: {produto.local}
                </p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 transition text-white text-lg font-semibold py-3 px-6 rounded-xl w-full">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
