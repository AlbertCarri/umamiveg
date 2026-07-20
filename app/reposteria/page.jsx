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
        className="relative bg-[url('/Reposteria400x800.webp')] md:bg-[url('/Reposteria2500x2500.webp')] bg-cover md:bg-top bg-center md:h-[2000px] h-svh overflow-scroll scrollbar-hide text-center"
        
      >
        {!menu && <div className="loader m-auto mt-96"></div>}
        <div className="bg-slate-800 mx-auto w-2/3 mt-4 p-4 rounded-xl">
          <p className="md:text-4xl text-xl md:mb-2 mb-0">
            Tomamos pedidos de viernes a miercoles hasta 18hs
          </p>
          <p className="md:text-4xl text-xl md:mb-4 mb-2 ">
            Están listos para retirar el sábado de 12hs a 20hs
          </p>
          <p className="md:text-4xl text-xl">
            Compra mínima $25000😏
          </p>
        </div>
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
