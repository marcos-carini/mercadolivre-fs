import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div>
      <div className="container mx-auto w-full px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Mercado Livre" width={180} height={180} />
        </Link>

        {/* Barra de pesquisa */}
        <div className="border border-gray-200 bg-white flex items-center flex-1 max-w-xl mx-4">
          <input
            type="text"
            placeholder="Buscar produtos, marcas e mais..."
            className="w-full px-4 py-2 focus:outline-none"
          />
          <button className="text-gray-200 px-4 py-2">
            <Search size={24} />
          </button>
        </div>

        {/* Botão Assine Meli+ */}
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
          Assine Meli+
        </button>
      </div>
    </div>
  );
}
