import "./globals.css";
import MenuBurger from "@/components/menuBurger";
import Footer from "@/components/Footer";
import MenuNoSmartPhone from "@/components/MenuNoSmartPhone";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from "./context/cartContext";

export const metadata = {
  title: "Umamiveg | Comida vegana casera en Campana",
  description:
    "Umamiveg comida vegana. Menús veganos y 100% a base de platas. Pedidos online",
  verification: {
    google: "DKdWxgehorVyZzNTiSlzT7AHp7s2TRpln9yBrFYXGJQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="google-site-verification"
          content="DKdWxgehorVyZzNTiSlzT7AHp7s2TRpln9yBrFYXGJQ"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-gray-800/90 text-gray-100 backdrop-blur-sm">
          <nav
            className="flex items-center justify-between p-0 px-2 md:px-4"
            aria-label="Navegación principal"
          >
            <a href="/" className="flex items-center">
              <Image
                src="/Etiqueta-UMAMIVEG-Nuevo.png"
                alt="Logo Umamiveg"
                width={100}
                height={100}
                className="md:mr-4 mr-2"
                priority
              />
              <span className="md:text-4xl text-3xl font-bold p-2">
                UmamiVeg
              </span>
            </a>
            <div className="hidden md:flex space-x-4 lg:text-xl text-md mr-4">
              <MenuNoSmartPhone />
            </div>
            <div className="md:hidden">
              <MenuBurger />
            </div>
          </nav>
        </header>
        <main>
          <CartProvider>{children}</CartProvider>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
