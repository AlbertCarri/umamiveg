"use client";

import { useState } from "react";
import { StoreAddCartButton } from "./StoreAddCartButton";

export default function WhatsappOrPedidosya({ menu }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {!showMenu && (
        <div className="flex flex-col items-center w-full top-8 text-2xl p-8">
          <div className="flex flex-row justify-between">
            <button type="button" onClick={() => setShowMenu(true)}>
              <img
                src="/takeaway.png"
                className="m-auto w-4/5 transition-all hover:scale-105"
                alt="pedidoya"
              />
            </button>
            <a
              href="https://www.pedidosya.com.ar/restaurantes/campana/umamiveg-comida-vegana-42acf7c3-29b8-404e-a4d9-1de35b204228-menu?origin=shop_list"
              target="blank"
              rel="noreferrer"
            >
              <img
                src="/pedidosya.png"
                className="m-auto w-4/5 transition-all hover:scale-105 shadow-xl"
                alt="pedidoya"
              />
            </a>
          </div>
          <div className="mt-16 md:text-4xl text-lg text-left">
            <p>Podes pedir por la App de PedidosYa (incluye delivery).</p>
            <p>O podes encargar por whatsapp con</p>
            <p>la opción Retirar en local.</p>
          </div>
        </div>
      )}
      {showMenu && <StoreAddCartButton menu={menu} />}
    </>
  );
}
