"use server";

import WhatsappOrPedidosya from "@/components/WhatsappOrPedidosya";
import { getMenu } from "@/lib/getMenu";
import { connection } from "next/server";

export default async function Menu() {
  await connection();
  const menu = await getMenu();

  return (
    <>
      <div
        className="relative bg-cover md:bg-top bg-center md:h-[2000px] h-svh overflow-scroll scrollbar-hide text-center"
        style={{ backgroundImage: "url('/menu2500x2500.webp')" }}
      >
        <div className="absolute text-xl text-white w-full p-4">
          <WhatsappOrPedidosya menu={menu} />
        </div>
      </div>
    </>
  );
}
