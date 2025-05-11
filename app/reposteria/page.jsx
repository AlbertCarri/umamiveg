"use server";

import { getReposteria } from "@/lib/getReposteria";
import { StoreAddCartButton } from "@/components/StoreAddCartButton";
import { connection } from "next/server";

export default async function Reposteria() {
  await connection();
  const menu = await getReposteria();

  return (
    <>
      <div
        className="relative bg-cover md:bg-top bg-center md:h-[2000px] h-svh overflow-scroll scrollbar-hide text-center"
        style={{ backgroundImage: "url('/Reposteria2500x2500.webp')" }}
      >
        {!menu && <div className="loader m-auto mt-96"></div>}
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
