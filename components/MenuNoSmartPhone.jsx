'use client'

import Link from "next/link";

export default function MenuNoSmartPhone() {
  return (
    <div className="text-2xl space-x-8">
      <Link href="/menu" className="hover:text-lime-400">
        Menú
      </Link>
      <Link href="/congelados" className="hover:text-lime-400">
        Congelados
      </Link>
      <Link href="/tienda" className="hover:text-lime-400">
        Tienda
      </Link>
      <Link href="/recetas" className="hover:text-lime-400">
        Recetas
      </Link>
      <Link href="/reposteria" className="hover:text-lime-400">
        Panadería
      </Link>
      <Link href="/contacto" className="hover:text-lime-400">
        Contacto
      </Link>
    </div>
  );
}
