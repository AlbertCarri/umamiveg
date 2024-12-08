'use client'

export default function Contacto() {

    const sendWhatsapp = (ev) => {
        ev.preventDefault()
        console.log(ev.target[0].value)
        const parametroCodificado = encodeURIComponent(ev.target[0].value)
        window.open(`https://api.whatsapp.com/send?phone=543489538212&text=${parametroCodificado}`)
    }

    return (
        <>
            <div className="relative bg-cover flex flex-col md:bg-top bg-center md:h-[2000px] h-svh overflow-scroll text-center items-center"
                style={{ backgroundImage: "url('/Contacto2500x2500.jpg')" }}>
                <form onSubmit={sendWhatsapp} className="flex flex-col w-full items-center p-2">
                    <textarea placeholder="Ingrese su Consulta" className="text-gray-900 text-2xl md:w-2/3 w-full p-8 mt-16 rounded-2xl" />
                    <button type="submit" className="bg-green-700 py-4 px-6 mt-4 rounded-xl text-xl hover:bg-green-800">Enviar consulta</button>
                </form>
                <div className="flex mt-32 items-center">
                    <p className="text-2xl mr-6">Nuestro instagram:</p>
                    <a href="https://www.instagram.com/umami.veg/" target="blank">
                        <img src="/instagram.png" width={100} />
                    </a>
                </div>
            </div>
        </>
    )
}

/*

const texto = "Hola Mundo! Cómo estás?";
const parametroCodificado = encodeURIComponent(texto);
console.log(parametroCodificado); // "Hola%20Mundo!%20C%C3%B3mo%20est%C3%A1s%3F"

*/