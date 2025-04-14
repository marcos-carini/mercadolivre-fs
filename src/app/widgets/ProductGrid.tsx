import Link from "next/link";

const dados = {
  produtos: [
    {
      id: 1,
      titulo: "Smartphone Samsung Galaxy S23",
      descricao: "128GB, Tela 6.1'', Câmera Tripla",
      preco: 3599.99,
      local: "São Paulo, SP",
      url: "samsung-galaxy-s23",
      fotos: [
        {
          id: 1,
          descricao: "Foto do Galaxy S23",
          url: "https://http2.mlstatic.com/D_NQ_NP_969408-MLU75401927010_042024-O.webp",
        },
      ],
    },
    {
      id: 2,
      titulo: "Fone Bluetooth JBL Tune 510BT",
      descricao: "Conforto e som potente com Bluetooth",
      preco: 249.99,
      local: "Rio de Janeiro, RJ",
      url: "fone-jbl-tune-510bt",
      fotos: [
        {
          id: 1,
          descricao: "Fone JBL",
          url: "https://http2.mlstatic.com/D_NQ_NP_686321-MLU77493107086_072024-O-fone-de-ouvido-tune-510bt-bluetooth-sfio-android-e-ios.webp",
        },
      ],
    },
    {
      id: 3,
      titulo: "Notebook Lenovo Ideapad 3i",
      descricao: "Intel Core i5, 8GB RAM, 256GB SSD",
      preco: 2899.9,
      local: "Belo Horizonte, MG",
      url: "notebook-lenovo-ideapad-3i",
      fotos: [
        {
          id: 1,
          descricao: "Notebook Lenovo",
          url: "https://http2.mlstatic.com/D_NQ_NP_942073-MLU77155449116_072024-O.webp",
        },
      ],
    },
    {
      id: 4,
      titulo: "Cadeira Gamer ThunderX3",
      descricao: "Conforto e estilo para longas sessões",
      preco: 1199.0,
      local: "Curitiba, PR",
      url: "cadeira-gamer-thunderx3",
      fotos: [
        {
          id: 1,
          descricao: "Cadeira gamer",
          url: "https://http2.mlstatic.com/D_NQ_NP_761396-MLA82298093467_022025-O.webp",
        },
      ],
    },
    {
      id: 5,
      titulo: "Console PlayStation 5",
      descricao: "Edição com leitor de disco",
      preco: 3999.99,
      local: "São Luís, MA",
      url: "console-playstation-5",
      fotos: [
        {
          id: 1,
          descricao: "PlayStation 5",
          url: "https://http2.mlstatic.com/D_NQ_NP_610989-MLA80823022081_112024-O.webp",
        },
      ],
    },
    {
      id: 6,
      titulo: "Smart TV LG 50'' 4K UHD",
      descricao: "Com inteligência artificial e webOS",
      preco: 2399.5,
      local: "Fortaleza, CE",
      url: "smart-tv-lg-50-4k",
      fotos: [
        {
          id: 1,
          descricao: "Smart TV LG",
          url: "https://http2.mlstatic.com/D_NQ_NP_2X_642665-MLA83156381696_032025-F.webp",
        },
      ],
    },
    {
      id: 7,
      titulo: "Echo Dot 5ª Geração",
      descricao: "Com Alexa - Cor Preta",
      preco: 379.0,
      local: "Porto Alegre, RS",
      url: "echo-dot-5",
      fotos: [
        {
          id: 1,
          descricao: "Echo Dot",
          url: "https://http2.mlstatic.com/D_NQ_NP_965092-MLU74303116420_022024-O.webp",
        },
      ],
    },
    {
      id: 8,
      titulo: "Kindle 11ª geração 6''",
      descricao: "Tela antirreflexo, luz embutida",
      preco: 499.0,
      local: "Salvador, BA",
      url: "kindle-11",
      fotos: [
        {
          id: 1,
          descricao: "Kindle 11ª geração",
          url: "https://http2.mlstatic.com/D_NQ_NP_846184-MLA81638923774_012025-O.webp",
        },
      ],
    },
  ],
};

export default function ProductGrid() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dados.produtos.map((produto, indice) => (
            <Link href={produto.url} key={indice}>
              <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
                <img
                  src={produto.fotos[0].url}
                  alt={produto.fotos[0].descricao}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-base font-medium text-gray-800 mb-1">
                    {produto.titulo}
                  </h3>
                  <p className="text-lg text-green-600 font-bold mb-1">
                    R$ {produto.preco}
                  </p>
                  <p className="text-sm text-gray-500">{produto.local}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
