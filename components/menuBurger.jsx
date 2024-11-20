'use client'
import { useState } from "react"

export default function MenuBurger() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button type="button" onClick={() => setIsOpen(true)}>
                <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier"><text x="5" y="15" fontSize="7" stroke="none" fill="#ffffff">menu</text></g>
                    <g id="SVGRepo_iconCarrier"> <path d="M12 4C6.73593 4 4.5508 5.71052 3.64374 7.13061C3.04915 8.06149 3.89543 9 5 9H19C20.1046 9 20.9508 8.06149 20.3563 7.13061C19.4492 5.71052 17.2641 4 12 4ZM4.5 17H19.5C20.3284 17 21 17.6716 21 18.5V18.5C21 19.3284 20.3284 20 19.5 20H4.5C3.67157 20 3 19.3284 3 18.5V18.5C3 17.6716 3.67157 17 4.5 17Z" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" /> </g>
                </svg>
            </button>
            {isOpen && (
                <>
                    <div className="modal" onClick={()=>setIsOpen(false)}>
                        <div className="modal-container flex flex-col text-2xl w-32">
                            <a href="menu" className="hover:text-yellow-300 mt-4">Menú</a>
                            <a href="congelados" className="hover:text-yellow-300 mt-4">Congelados</a>
                            <a href="tienda" className="hover:text-yellow-300 mt-4">Tienda</a>
                            <a href="reposteria" className="hover:text-yellow-300 mt-4">Repostería</a>
                            <a href="contacto" className="hover:text-yellow-300 mt-4 mb-5">Contacto</a>
                        </div>
                    </div>
                </>
            )
            }
        </div>
    )
}