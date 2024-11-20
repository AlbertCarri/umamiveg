'use client'

import { useState, useEffect } from "react"

export default function Tienda() {
  const [menu, setMenu] = useState([])
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    setShowMenu(false)
    const readMenu = async () => {
      const response = await fetch('/api/tienda', {
        method: 'GET',
      })
      const responseJson = await response.json()
      setMenu(responseJson[0].category)
    }
    readMenu()
    setShowMenu(true)
  }, [])

  return (
    <>
      <div className="relative overflow-scroll">
        <img src="/Tienda2500x2500.jpg" className="max-w-full md:block hidden" />
        <img src="Tienda1024x2048.jpg" className="max-w-full md:hidden block" />
        <div className="absolute text-xl text-white left-4 top-4">
          {showMenu && (
            menu.map((item, index) => (
              <div key={`${item.id}-${index}`}>
                <p  className="md:text-6xl text-2xl md:mb-4 mb-0 md:mt-8 mt-1 underline underline-offset-8">{(item.name).substring(7, 40)}:</p>
                <div className=" flex flex-wrap">
                  {item.menu.map((category_menu) => (
                    <div key={category_menu.id} className="bg-slate-900 bg-opacity-50 p-4 mr-4 mt-4 rounded-2xl md:w-96 w-11/12">
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
                              <p className='md:text-xl text-lg mb-2 underline underline-offset-4'>{category_menu.name}</p>
                              <p className='md:text-sm text-xs mb-1 h-16'>{category_menu.description}</p>
                              <p className='text-md mb-1'>Precio ${category_menu.price}</p>

                            </div>
                          </div>
                          <p className='text-xs mb-1'>Alergenos:</p>
                          <div key={Math.random()} className='flex flex-row justify-center'>
                            {category_menu.alergens.map((alerg, index) =>
                              <p key={`${category_menu.id}-${index}`} className='bg-emerald-700 text-xs line-clamp-1 md:line-clamp-none rounded-sm px-1 mr-2 mb-4'>{alerg}</p>
                            )}
                          </div>
                          <div className="w-full border-zinc-500 border-t p-2 flex justify-center"></div> {/* línea separadora*/}
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