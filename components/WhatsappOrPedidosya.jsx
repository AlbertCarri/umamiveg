"use client";

import { useState } from "react";
import { StoreAddCartButton } from "./StoreAddCartButton";

export default function WhatsappOrPedidosya({ menu }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <p className="md:text-4xl text-xl md:mb-2 mb-0">
        Horarios : de Lunes a Sábados
      </p>
      <p className="md:text-3xl text-xl md:mb-8 mb-4 ">
        de 12hs a 14hs y de 20hs a 23hs
      </p>
      <StoreAddCartButton menu={menu} name={"null"} />
    </>
  );
}
