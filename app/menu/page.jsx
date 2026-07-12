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
        <div className="w-full mt-16">
          {/*<WhatsappOrPedidosya menu={menu} /> // Menú desabilitado por el momento*/}
          <div className="md:w-2/3 w-11/12 mx-auto bg-gray-900/80 md:bg-transparent p-4 rounded-xl">
            <p className="text-left lg:text-2xl text-xl text-gray-100 ">
              Hoy no cocinamos todo… pero te damos lo mejor 😉.
              <br />
              La situación está rara y decidimos ser inteligentes: vos cocinás
              lo simple (papas, ensalada, amor) y nosotros te damos lo
              importante.
              <br />
              Te vendemos nuestro pan artesanal y nuestro seitán (ese que no se
              consigue en ningún lado) para que armes tus propios sándwiches en
              casa. Cocinar un poco también es parte del disfrute 😅.
            </p>
            <h2 className="text-2xl md:text-4xl mt-6">
              Tenés un cumpleaños o una fiesta familiar?
            </h2>
            <p className="text-left lg:text-2xl text-xl text-gray-100 mt-2">
              No dejes a tus invitados veganos o vegetarianos sin comer, eso es
              muy feo😩. Avisanos con tiempo y te enviamos nuestra propuesta,
              vas a quedar muy bien😉.
              <br />
              Dulce: Hacemos tortas de cumpleaños y mesas dulces.
              <br />
              Salado: empanaditas, chips, minitartas, sandwichs, etc.
              <br />
              Tenemos todo para ofrecerte para tu reunión familiar o catering,
              escribinos a nuestro whatsapp en "Contacto".
            </p>
          </div>
          <ProductLink />
        </div>
      </div>
    </>
  );
}
