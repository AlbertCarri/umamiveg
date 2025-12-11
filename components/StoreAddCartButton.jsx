"use client";

import ShowCart from "@/components/showcart.jsx";
import { useState } from "react";
import { Chatbot } from "./Chatbot";

export const StoreAddCartButton = ({ menu, name }) => {
  const [cart, setCart] = useState(false);
  const [cartContent, setCartContent] = useState([]);
  const [showCartContent, setShowCartContent] = useState(false);

  const addCart = (cartAdd) => {
    setCart(true);
    setCartContent((prevCartContent) => {
      const existe = prevCartContent.find((item) => item.id === cartAdd.id);
      if (existe) {
        return cartContent;
      } else {
        return [
          ...prevCartContent,
          {
            id: cartAdd.id,
            name: cartAdd.name,
            price: cartAdd.price,
            amount: 1,
          },
        ];
      }
    });
  };

  const showCartItems = () => {
    setShowCartContent(!showCartContent);
  };

  return (
    <>
      <Chatbot className={"bg-slate-800"} />
      {cart && (
        <>
          <button
            type="button"
            className="fixed w-16 right-10"
            onClick={showCartItems}
          >
            <img src="/cart.png" alt="Cart" className="backdrop-invert-0" />
          </button>
          <p className=" fixed bg-red-600 w-7 right-9 rounded-xl">
            {cartContent.length}
          </p>
        </>
      )}
      {showCartContent && (
        <div>
          <ShowCart
            cartContent={cartContent}
            setCartContent={setCartContent}
            setShowCartContent={setShowCartContent}
          />
        </div>
      )}
      <p className="md:text-4xl text-xl md:mb-2 mb-0">
        Horarios : de Lunes a Sábados
      </p>
      <p className="md:text-3xl text-xl md:mb-8 mb-4 ">
        de 12hs a 14hs y de 20hs a 23hs
      </p>
      {menu.map((item, index) => (
        <div key={`${item.id}-${index}`} className="flex flex-col w-full mb-16">
          <p className="md:text-6xl text-2xl md:mb-4 mb-0 underline underline-offset-8">
            {name === "null"
              ? item.name.replace("menu-", "").toUpperCase()
              : name.toUpperCase()}
          </p>
          <div className="flex flex-wrap justify-center w-full gap-4">
            {item.menu.map((category_menu) => {
              if (category_menu.checked) {
                return (
                  <div
                    key={category_menu.id}
                    className="bg-slate-900 bg-opacity-50 p-4 m-auto mt-4 sm:w-96 w-full rounded-2xl"
                  >
                    <div className="flex flex-row">
                      <div className="w-1/3">
                        <div className="rounded-lg mr-4 items-center w-28 h-28 overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={category_menu.image}
                            alt="Food"
                          />
                        </div>
                      </div>
                      <div className="w-2/3 p-2">
                        <p className="md:text-xl text-lg mb-2 underline underline-offset-4">
                          {category_menu.name}
                        </p>
                        <p className="md:text-sm text-xs text-left ml-4 mb-1 h-16">
                          {category_menu.description}
                        </p>
                        <p className="text-md mb-1">
                          Precio ${category_menu.price}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs mb-1">Alergenos:</p>
                    <div
                      key={Math.random()}
                      className="flex flex-row justify-center"
                    >
                      {category_menu.alergens.map((alerg, index) => (
                        <p
                          key={`${category_menu.id}-${index}`}
                          className="bg-emerald-700 text-xs line-clamp-1 md:line-clamp-none rounded-sm px-1 mr-2 mb-4"
                        >
                          {alerg}
                        </p>
                      ))}
                    </div>
                    <div className="w-full border-zinc-500 border-t p-2 flex justify-center"></div>{" "}
                    {/* línea separadora*/}
                    <button
                      type="button"
                      onClick={() => addCart(category_menu)}
                      className="bg-green-900 w-3/4 mt-1 ml-auto mr-auto md:text-lg text-ms text-white rounded-xl p-1 hover:bg-orange-800"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </>
  );
};
