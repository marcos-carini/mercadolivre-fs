'use client';

import Link from "next/link";
import { useEffect, useState } from "react";


export default function ProductGrid() {

  const [dataRes, setDataRes] = useState();

  const getProducts = async () => {
    const res = await fetch("http://localhost:3050/")
    const data = await res.json()
    setDataRes(data);
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dataRes && dataRes.map((produto, indice) => (
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
