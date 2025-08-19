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
    <Chatbot className={'bg-slate-800'} />
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
      {menu.map((item, index) => (
        <div key={`${item.id}-${index}`} className="flex flex-col">
          <p className="md:text-6xl text-2xl md:mb-4 mb-0 md:mt-8 mt-1 underline underline-offset-8">
            {name === "null" ? item.name.replace('menu-','') : name}
          </p>
          <div className="flex flex-wrap justify-around ">
            {item.menu.map((category_menu) => (
              <div key={category_menu.id}>
                {category_menu.checked && (
                  <div className="bg-slate-900 bg-opacity-50 p-4 m-auto mt-4 rounded-2xl md:w-96 w-11/12">
                    <div className="flex flex-row justify-center">
                      <div className="basis-40">
                        <div className="rounded-lg mr-4 items-center w-28 h-28 overflow-hidden">
                          <img
                            className="w-full h-full object-cover"
                            src={category_menu.image}
                            alt="Food"
                          />
                        </div>
                      </div>
                      <div className="basis-96">
                        <p className="md:text-xl text-lg mb-2 underline underline-offset-4">
                          {category_menu.name}
                        </p>
                        <p className="md:text-sm text-xs mb-1 h-16">
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
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
