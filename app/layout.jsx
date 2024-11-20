import "./globals.css";
import MenuBurger from "@/components/menuBurger";


export const metadata = {
  title: "Umamiveg",
  description: "Umamiveg comida vegana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <nav className="flex items-center justify-between p-2  bg-gray-800 text-gray-100" aria-label="Navegación principal">
          <a href="/" className="flex items-center">
            <img src="/Etiqueta-UMAMIVEG-Nuevo.png" alt="Logo Umamiveg" width={100} className="md:mr-4 mr-2" />
            <span className="md:text-4xl text-3xl font-bold p-2">UmamiVeg</span>
          </a>
          <div className="hidden md:flex space-x-4 lg:text-xl text-md mr-4">
            <a href="menu" className="hover:text-lime-400">Menú</a>
            <a href="congelados" className="hover:text-lime-400">Congelados</a>
            <a href="tienda" className="hover:text-lime-400">Tienda</a>
            <a href="reposteria" className="hover:text-lime-400">Repostería</a>
            <a href="contacto" className="hover:text-lime-400">Contacto</a>
          </div>
          <div className="md:hidden">
            <MenuBurger />
          </div>
        </nav>
        {children}
        <footer className="bg-black text-white md:text-xl text-xs ">
          <div className="w-full m-0 p-4">
            <div className="flex flex-row text-center">
              <div className="basis-1/3">
                <b>Desarrollador:</b>
                <p>Alberto Carrizo</p>
              </div>
              <div className="basis-1/3">
                <b>React Framework:</b>
                <p>Hecho con NEXT.js</p>
              </div>
              <div className="basis-1/3 flex flex-row justify-center md:space-x-4 space-x-0">
                <a
                  href="https://www.linkedin.com/in/alberto-edelmiro-carrizo-7639a186/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/linkedin.png" alt="logo" width={48} className="mx-auto md:scale-100 scale-75" />
                </a>
                <a
                  href="https://github.com/AlbertCarri"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/github.png" alt="logo" width={48} className="mx-auto md:scale-100 scale-75" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
