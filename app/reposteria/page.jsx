"use server";

import { getReposteria } from "@/lib/getReposteria";
import { StoreAddCartButton } from "@/components/StoreAddCartButton";

export default async function Reposteria() {
  const menu = await getReposteria();

  return (
    <>
      <div
        className="relative bg-cover md:bg-top bg-center md:h-[2000px] h-svh overflow-scroll scrollbar-hide text-center"
        style={{ backgroundImage: "url('/Reposteria2500x2500.webp')" }}
      >
        {!menu && <div className="loader m-auto mt-96"></div>}
        {menu && <StoreAddCartButton menu={menu} />}
      </div>
    </>
  );
}
