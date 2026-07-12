export default function Home() {
  return (
    <>
      {/* Sección para pantallas horizontales grandes */}
      <div className="md:block hidden relative">
        <img
          src="/BackGroundMain-mini.webp"
          className="w-full object-fill"
          loading="lazy"
        />
        <div className="absolute flex flex-col items-center justify-center text-gray-100 w-full text-center top-10">
          <p className="text-8xl text-gray-100">UmamiVeg</p>
          <p className="text-4xl text-gray-100">Comida a base de plantas</p>

          <div className="text-gray-100 w-1/2 mt-8 text-left">
            <p className="lg:text-4xl text-xl text-gray-100">
              Nuestra propuesta:
            </p>
            <p className="lg:text-2xl text-md text-gray-100">
              Decidimos ajustar la propuesta para cuidar recursos y seguir
              adelante.
              <br />
              Por eso ahora ofrecemos productos clave de nuestra cocina: pan,
              seitán y opciones congeladas, listas para usar. <br />
              La idea es simple: menos desperdicio, más flexibilidad y la misma
              comida rica de siempre, pero disfrutada en tu casa.
            </p>
            <p className="lg:text-4xl text-xl text-gray-100 mt-8">
              Comer rico o darse un gusto:
            </p>
            <p className="lg:text-2xl text-md text-gray-100">
              ¿Queres comer un sandwich con nuestro pan especial?, nuestro pan
              brioche casero con semillitas. Tenes ganas de comer seitán y no
              conseguis?, o panes de hamburguesas sin gusto raro?. Medallones de
              legumbres casero, con verduras de verdad, no desidratadas. Tenemos
              todo para vos, congelados y panaderia. Todo es por pedido
              anticipado según nuestro cronograma de trabajo.
            </p>
            <p className="lg:text-4xl text-xl text-gray-100 mt-8">
              Tenés un evento familiar?:
            </p>
            <p className="lg:text-2xl text-md text-gray-100">
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
            <div className="w-1/3 mx-auto text-xl mt-8">
              <a
                href="menu"
                target="blank"
                rel="noreferrer"
                className="mt-12 ml-12"
              >
                Pedi por WhatsApp
                <img
                  src="/takeaway.png"
                  className="lg:w-60 w-32 transition-all lg:hover:w-64 hover:w-36 hover:-rotate-6 shadow-xl"
                  alt="pedidoya"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Sección para móvil y tablets*/}
      <div className="md:hidden relative min-h-screen">
        <img
          src="/BackGroundMain-mini.webp"
          className="max-w-full opacity-50"
          loading="lazy"
        />
        <div className="absolute text-gray-100 top-2 w-full text-center">
          <p className="text-4xl text-gray-100">UmamiVeg</p>
          <p className="text-md text-gray-100">Comida a base de plantas</p>
          <div className="text-left ml-2">
            <p className="text-md text-gray-100 mt-4">Quienes somos?:</p>
            <p className="text-xs text-gray-100">
              Somos un emprendimiento familiar con una dark-kitchen o cocina
              fantasma.
              <br />
              Te ofrecemos comida vegana hecha con ingredientes frescos y de
              alta calidad. <br />
              Cada plato está preparado con amor y cuidado, como si lo hicieras
              en tu propia cocina.
            </p>
            <p className="text-xl text-gray-100 mt-4">Comodidad:</p>
            <p className="text-xs text-gray-100">
              ¿Estás ocupado y no tienes tiempo para cocinar? No te preocupes.
              Con nuestra comida lista para comer y nuestros productos
              congelados, puedes disfrutar de una comida nutritiva y deliciosa
              en cuestión de minutos, sin sacrificar tu salud ni el sabor.
            </p>
            <p className="text-xl text-gray-100 mt-4">
              Tenés un evento familiar?
            </p>

            <p className="text-left text-xs text-gray-100 mt-2 mb-4">
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

          <a href="menu" target="blank" rel="noreferrer">
            Pedi por WhatsApp
            <img
              src="/takeaway.png"
              className="mx-auto shadow-xl mt-2"
              width={100}
              alt="umamiveg"
            />
          </a>
        </div>
      </div>
    </>
  );
}
