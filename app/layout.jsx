import "./globals.css";
import MenuBurger from "@/components/menuBurger";
import Footer from "@/components/Footer";
import MenuNoSmartPhone from "@/components/MenuNoSmartPhone";

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
        <nav
          className="flex items-center justify-between p-2  bg-gray-800 text-gray-100"
          aria-label="Navegación principal"
        >
          <a href="/" className="flex items-center">
            <img
              src="/Etiqueta-UMAMIVEG-Nuevo.png"
              alt="Logo Umamiveg"
              width={100}
              className="md:mr-4 mr-2"
            />
            <span className="md:text-4xl text-3xl font-bold p-2">UmamiVeg</span>
          </a>
          <div className="hidden md:flex space-x-4 lg:text-xl text-md mr-4">
            <MenuNoSmartPhone />
          </div>
          <div className="md:hidden">
            <MenuBurger />
          </div>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
