import WhatsappOrPedidosya from "@/components/WhatsappOrPedidosya"; // Componente que arma el menú
import { getMenu } from "@/lib/getMenu";
import { connection } from "next/server";
import ProductLink from "@/components/ProductLink";

export default async function Menu() {
  await connection();
  const menu = await getMenu();

  return (
    <>
      <div
        className="relative bg-cover md:bg-top bg-center md:h-[2000px] h-svh overflow-scroll scrollbar-hide text-center"
        style={{ backgroundImage: "url('/menu2500x2500.webp')" }}
      >
        <div className="absolute w-full mt-16">
          {/*<WhatsappOrPedidosya menu={menu} /> // Menú desabilitado por el momento*/}
          <p className="md:w-2/3 w-11/12 mx-auto text-left lg:text-4xl text-xl text-gray-100">
            Hoy no cocinamos todo… pero te damos lo mejor 😉.
            <br />
            La situación está rara y decidimos ser inteligentes: vos cocinás lo
            simple (papas, ensalada, amor) y nosotros te damos lo importante.
            <br />
            Te vendemos nuestro pan artesanal y nuestro seitán (ese que no se
            consigue en ningún lado) para que armes tus propios sándwiches en
            casa. Cocinar un poco también es parte del
            disfrute 😅.
          </p>
          <ProductLink />
        </div>
      </div>
    </>
  );
}
