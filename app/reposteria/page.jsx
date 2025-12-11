"use server";

import { getReposteria } from "@/lib/getReposteria";
import { StoreAddCartButton } from "@/components/StoreAddCartButton";
import { connection } from "next/server";
import { Chatbot } from "@/components/Chatbot";

export default async function Reposteria() {
  await connection();
  const menu = await getReposteria();

  return (
    <>
      <Chatbot className={"bg-slate-800"} />
      <div
        className="relative bg-cover md:bg-top bg-center md:h-[2000px] h-svh overflow-scroll scrollbar-hide text-center"
        style={{ backgroundImage: "url('/Reposteria2500x2500.webp')" }}
      >
        {!menu && <div className="loader m-auto mt-96"></div>}
        <p className="md:text-4xl text-xl md:mb-2 mb-0">
          Tomamos pedidos de viernes a miercoles hasta 18hs
        </p>
        <p className="md:text-4xl text-xl md:mb-8 mb-4 ">
          Están listos para retirar el sábado de 12hs a 20hs
        </p>
        {menu && (
          <StoreAddCartButton
            menu={menu}
            name={"Repostería casera vegana y apto APLV "}
          />
        )}
      </div>
    </>
  );
}
