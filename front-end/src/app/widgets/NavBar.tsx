import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <ul className="flex gap-6 justify-center">
            <li>
              <Link
                href="/categorias"
                className="text-sm text-gray-700 hover:text-yellow-500 transition"
              >
                Categorias
              </Link>
            </li>
            <li>
              <Link
                href="/ofertas"
                className="text-sm text-gray-700 hover:text-yellow-500 transition"
              >
                Ofertas
              </Link>
            </li>
            <li>
              <Link
                href="/cupons"
                className="text-sm text-gray-700 hover:text-yellow-500 font-medium transition"
              >
                Cupons
              </Link>
            </li>
            <li>
              <Link
                href="/supermercados"
                className="text-sm text-gray-700 hover:text-yellow-500 font-medium transition"
              >
                Supermercados
              </Link>
            </li>
            <li>
              <Link
                href="/moda"
                className="text-sm text-gray-700 hover:text-yellow-500 font-medium transition"
              >
                Moda
              </Link>
            </li>
            <li>
              <Link
                href="/mercado-play"
                className="text-sm text-gray-700 hover:text-yellow-500 font-medium transition"
              >
                Mercado Play
              </Link>
            </li>
            <li>
              <Link
                href="/vender"
                className="text-sm text-gray-700 hover:text-yellow-500 font-medium transition"
              >
                Vender
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
