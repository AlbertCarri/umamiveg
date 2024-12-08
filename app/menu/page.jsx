'use client'

import { useState, useEffect } from "react"
import ShowCart from "@/components/showcart.jsx"

export default function Menu() {
  const [menu, setMenu] = useState([])
  const [showMenu, setShowMenu] = useState(false)
  const [cart, setCart] = useState(false)
  const [cartContent, setCartContent] = useState([])
  const [showCartContent, setShowCartContent] = useState(false)

  useEffect(() => {
    const readMenu = async () => {
      try {
        const response = await fetch('/api/menu', { method: 'GET' })
        if (!response.ok) throw new Error('Error al obtener el menú')
        const responseJson = await response.json()
        setMenu(responseJson[0].category || [])
      } catch (error) {
        console.error('Error:', error);
      }
    }
    readMenu()

  }, [])

  const addCart = (cartAdd) => {
    setCart(true)
    setCartContent((prevCartContent) => {
      const existe = prevCartContent.find((item) => item.id === cartAdd.id)
      if (existe) {
        return cartContent
      } else {
        return [...prevCartContent, { id: cartAdd.id, name: cartAdd.name, price: cartAdd.price, amount: 1 }]
      }
    })
  }

  const showCartItems = () => {
    setShowCartContent(!showCartContent)
  }

  return (
    <>
      <div className="relative bg-cover md:bg-top bg-center md:h-[2000px] h-svh overflow-scroll text-center" style={{ backgroundImage: "url('/menu2500x2500.jpg')" }}>
        <div className="absolute text-xl text-white w-full p-4">
          {!showMenu && (
            <div className="flex flex-col items-center w-full top-8 text-2xl p-8">
              <div className="flex flex-row justify-between">
                <button type="button" onClick={() => setShowMenu(true)} >
                  <img src="/takeaway.png" className="m-auto w-4/5 transition-all hover:scale-105" alt="pedidoya" />
                </button>
                <a href="https://www.pedidosya.com.ar/restaurantes/campana/umamiveg-comida-vegana-42acf7c3-29b8-404e-a4d9-1de35b204228-menu?origin=shop_list"
                  target="blank"
                  rel="noreferrer">

                  <img src="/pedidosya.png" className="m-auto w-4/5 transition-all hover:scale-105 shadow-xl" alt="pedidoya" />
                </a>
              </div>
              <div className="mt-16 md:text-4xl text-lg text-left">
                <p>Podes pedir por la App de PedidosYa (incluye delivery).</p>
                <p>O podes encargar por whatsapp con</p>
                <p>la opción Retirar en local.</p>
              </div>
            </div>
          )}
          {cart && (
            <>
              <button type="button"
                className="fixed w-16 right-10"
                onClick={showCartItems}>
                <img src="/cart.png" alt="Cart" className="backdrop-invert-0" />
              </button>
              <p className=" fixed bg-red-600 w-7 right-9 rounded-xl">{cartContent.length}</p>
            </>
          )}
          {showCartContent && (
            <div>
              <ShowCart cartContent={cartContent} setCartContent={setCartContent} setShowCartContent={setShowCartContent} />
            </div>
          )}
          {showMenu && (
            menu.map((item, index) => (
              <div key={`${item.id}-${index}`}>
                <p className="bg-neutral-700 bg-opacity-75 p-1 md:text-6xl text-2xl md:mb-4 mb-0 md:mt-8 mt-4 rounded-lg">{(item.name).substring(5, 20)}:</p>
                <div className=" flex flex-wrap">
                  {item.menu.map((category_menu) => (
                    <div key={category_menu.id} className="bg-neutral-900 bg-opacity-75 p-4 m-auto mt-4 rounded-2xl md:w-96 w-11/12">
                      {category_menu.checked && (
                        <div>
                          <div className="flex flex-row justify-center">
                            <div className="basis-40">
                              <div className='rounded-lg mr-4 items-center w-28 h-28 overflow-hidden'>
                                <img
                                  className='w-full h-full object-cover'
                                  src={category_menu.image}
                                  alt="Food"
                                />
                              </div>
                            </div>
                            <div className="basis-96">
                              <p className='md:text-xl text-sm mb-2 underline underline-offset-4'>{category_menu.name}</p>
                              <p className='md:text-sm text-xs mb-1 h-16'>{category_menu.description}</p>
                              <p className='text-md mb-1'>Precio ${category_menu.price}</p>
                            </div>
                          </div>
                          <p className='text-xs mb-1'>Alergenos:</p>
                          <div className='flex flex-row justify-center'>
                            {category_menu.alergens.map((alerg, index) =>
                              <p key={`${category_menu.id}-${index}`} className='bg-emerald-700 text-xs line-clamp-1 md:line-clamp-none rounded-sm px-1 mr-2 mb-1'>{alerg}</p>
                            )}
                          </div>
                          <div className="bg-green-900 w-3/4 mt-1 ml-auto mr-auto md:text-lg text-ms text-white rounded-xl p-1 hover:bg-orange-800">
                            <button type="button" onClick={() => addCart(category_menu)}>Agregar al pedido</button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )))}
        </div>
      </div>
    </>
  )
}