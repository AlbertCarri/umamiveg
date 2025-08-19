"use server";

import { StoreAddCartButton } from "@/components/StoreAddCartButton";
import { getCongelados } from "@/lib/getCongelados";
import { connection } from "next/server";
import { Chatbot } from "/components/Chatbot";

export default async function Congelados() {
  await connection();
  const menu = await getCongelados();

  return (
    <>
      <div
        className="relative bg-cover md:bg-top bg-center md:h-[2000px] scrollbar-hide h-svh overflow-scroll text-center"
        style={{ backgroundImage: "url('/congelados2500x2500.webp')" }}
      >
        {!menu && <div className="loader m-auto mt-96"></div>}
        {menu && (
          <StoreAddCartButton
            menu={menu}
            name={"Congelados caseros a pedido apta APLV"}
          />
        )}
      </div>
      <Chatbot className={'bg-slate-800'} />
    </>
  );
}
