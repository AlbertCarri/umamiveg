
export default function Home() {
  return (
    <>
    {/* Sección para pantallas horizontales grandes */}
    <div className="md:block hidden relative">
      <img src="/BackGroundMain.jpg" className="max-w-full" loading="lazy"/>
      <div className="absolute text-gray-100 w-full text-center top-10">
        <p className="text-8xl text-gray-100">
          UmamiVeg
        </p>
        <p className="text-4xl text-gray-100">
          Comida a base de plantas
        </p>
      </div>
      <div className="absolute text-gray-100 left-4 top-1/4 text-left xl:w-1/4 w-1/2">
        <p className="lg:text-2xl text-xl text-gray-100">
          Calidad Casera:
        </p>
        <p className="lg:text-xl text-md text-gray-100">
          Te ofrecemos comida vegana hecha con ingredientes frescos y de alta calidad. <br />
          Cada plato está preparado con amor y cuidado, como si lo hicieras en tu propia cocina.
        </p>
      </div>
      <div className="absolute text-gray-100 xl:left-3/4 left-1/2 top-1/3 text-left xl:w-1/4 w-1/2">
        <p className="lg:text-2xl text-xl text-gray-100">
          Comodidad:
        </p>
        <p className="lg:text-xl text-md text-gray-100">
          ¿Estás ocupado y no tienes tiempo para cocinar? No te preocupes. Con nuestra comida lista para comer y nuestros productos congelados, puedes disfrutar de una comida nutritiva y deliciosa en cuestión de minutos,
          sin sacrificar tu salud ni el sabor.
        </p>
      </div>
      <div className="absolute text-gray-100 left-4 top-1/2 text-left xl:w-1/4 w-1/2">
        <p className="lg:text-2xl text-xl text-gray-100">
          Más para contarte:
        </p>
        <p className="lg:text-xl text-md text-gray-100">
          ¡Nuestra comida a base de plantas no solo es saludable, sino deliciosa!
          Con sabores que compiten ¡y muchas veces superan! a los platos de origen animal,
          nuestras recetas han sorprendido a muchos. Desde hamburguesas hasta recetas japonesas,
          quienes prueban nuestras opciones quedan encantados con la calidad, el sabor y el cuidado en cada menú.
          ¿No nos crees?. Pide y descúbrelo por ti mismo.
        </p>
      </div>
      <div className="absolute text-gray-100 xl:left-3/4 left-1/2 top-3/4 text-left xl:w-1/4 w-1/2">
        <p className="lg:text-2xl text-xl text-gray-100">
          Nuestros Precios:
        </p>
        <p className="lg:text-xl text-md text-gray-100">
          Comer vegano no tiene por qué ser caro.
          Nuestros precios son tan accesibles como los de cualquier otro menú,
          pero con el extra de que aquí todo es casero y preparado con ingredientes frescos.
          Disfruta de la comida sin preocuparte por el bolsillo, y además llévate el plus de un menú lleno de dedicación y sabor.
        </p>
      </div>
      <div className="absolute left-1/4 top-3/4 text-2xl">
        <a href="https://www.pedidosya.com.ar/restaurantes/campana/umamiveg-comida-vegana-42acf7c3-29b8-404e-a4d9-1de35b204228-menu?origin=shop_list"
          target="blank"
          rel="noreferrer">
          Pedi por la APP
          <img src="/pedidosya.png" className="w-2/3 origin-center transition-all hover:scale-150 hover:-rotate-6 shadow-xl" alt="pedidoya" />
        </a>
      </div>
    </div>
    {/* Sección para móvil y tablets*/}
    <div className="md:hidden relative">
    <img src="/Main1024x2048.jpg" className="max-w-full opacity-50" loading="lazy" />
    <div className="absolute text-gray-100 top-2 w-full text-center">
      <p className="text-4xl text-gray-100">
        UmamiVeg
      </p>
      <p className="text-md text-gray-100">
        Comida a base de plantas
      </p>
      <div className="text-left ml-2">
      <p className="text-md text-gray-100 mt-4">
        Calidad Casera:
      </p>
      <p className="text-xs text-gray-100">
        Te ofrecemos comida vegana hecha con ingredientes frescos y de alta calidad. <br />
        Cada plato está preparado con amor y cuidado, como si lo hicieras en tu propia cocina.
      </p>
      <p className="text-md text-gray-100 mt-4">
        Comodidad:
      </p>
      <p className="text-xs text-gray-100">
        ¿Estás ocupado y no tienes tiempo para cocinar? No te preocupes. Con nuestra comida lista para comer y nuestros productos congelados, puedes disfrutar de una comida nutritiva y deliciosa en cuestión de minutos,
        sin sacrificar tu salud ni el sabor.
      </p>
      <p className="text-md text-gray-100 mt-4">
        Más para contarte:
      </p>
      <p className="text-xs text-gray-100">
        ¡Nuestra comida a base de plantas no solo es saludable, sino deliciosa!
        Con sabores que compiten ¡y muchas veces superan! a los platos de origen animal,
        nuestras recetas han sorprendido a muchos. Desde hamburguesas hasta recetas japonesas,
        quienes prueban nuestras opciones quedan encantados con la calidad, el sabor y el cuidado en cada menú.
        ¿No nos crees?. Pide y descúbrelo por ti mismo.
      </p>
      <p className="text-md text-gray-100 mt-4">
        Nuestros Precios:
      </p>
      <p className="text-xs text-gray-100">
        Comer vegano no tiene por qué ser caro.
        Nuestros precios son tan accesibles como los de cualquier otro menú,
        pero con el extra de que aquí todo es casero y preparado con ingredientes frescos.
        Disfruta de la comida sin preocuparte por el bolsillo, y además llévate el plus de un menú lleno de dedicación y sabor.
      </p>
      </div>
      <a href="https://www.pedidosya.com.ar/restaurantes/campana/umamiveg-comida-vegana-42acf7c3-29b8-404e-a4d9-1de35b204228-menu?origin=shop_list"
        target="blank"
        rel="noreferrer">
        <img src="/pedidosya.png" className="mx-auto scale-50 shadow-xl -mt-8" alt="pedidoya" />
      </a>
    </div>
  </div>
  </>
  )
}
