"use client";

import Link from "next/link";

export default function ProductLink() {
  return (
    <div className="mt-8 tracking-widest text-white font-bold">
      <Link
        href="/congelados"
        className="bg-cyan-600 p-4 hover:bg-cyan-800 rounded-xl shadow-inner shadow-black "
      >
        CONGELADOS
      </Link>
      <Link
        href="/reposteria"
        className="ml-8 bg-cyan-600 p-4 hover:bg-cyan-800 rounded-xl shadow-inner shadow-black"
      >
        REPOSTERÍA
      </Link>
    </div>
  );
}
