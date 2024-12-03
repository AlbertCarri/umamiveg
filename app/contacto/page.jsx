export default function Contacto(){
    return(
        <>
        <div className="relative bg-cover md:bg-top bg-center md:h-[2000px]  h-svh overflow-scroll text-center" 
        style={{ backgroundImage: "url('/Contacto2500x2500.jpg')" }}>
            <form>
                <textarea placeholder="Ingrese su Consulta" className="text-gray-900 text-2xl w-2/3 p-8 mt-16 rounded-2xl"/>
            </form>
        </div>
        </>
    )
}

/*

const texto = "Hola Mundo! Cómo estás?";
const parametroCodificado = encodeURIComponent(texto);
console.log(parametroCodificado); // "Hola%20Mundo!%20C%C3%B3mo%20est%C3%A1s%3F"

*/