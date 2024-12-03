import React from "react"

export default React.memo(function ShowCart({ cartContent, setCartContent, setShowCartContent }) {
    let newCartContent

    const addAmount = (productId) => {
        cartContent[productId].amount = (cartContent[productId].amount) + 1
        newCartContent = [...cartContent]
        return setCartContent(newCartContent)
    }


    const subsAmount = (productId) => {
        cartContent[productId].amount = (cartContent[productId].amount) - 1
        newCartContent = [...cartContent]
        if (cartContent[productId].amount === 0) {
            newCartContent = cartContent.filter((_, ind) => ind !== productId)
            return setCartContent(newCartContent)
        } return setCartContent(newCartContent)
    }

    const whatsappOrder = () => {
        let text = ''
        let total = 0
        cartContent.map((word) => {
            text = text + ("*"+word.name +"* : cantidad:" + word.amount + " precio:$" + word.price * word.amount + "%0A")
            total = total + (word.price * word.amount)
        })
        text = text + ('*TOTAL*: $' + total)
        window.open(`https://api.whatsapp.com/send?phone=543489538212&text=${text}`)
    }

    const cancelCart = () => {
        return setShowCartContent(false)
    }
    return (
        <div className="fixed flex flex-col bg-gray-50 text-slate-900 justify-center md:text-base text-base text-nowrap md:w-1/2 w-11/12 rounded-xl md:p-4 p-2">
            <table className="border-collapse border border-slate-500 w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-600 w-3/5">Producto</th>
                        <th className="border border-slate-600 w-1/5">Cantidad</th>
                        <th className="border border-slate-600 w-1/5">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {cartContent.map((item, index) =>
                        <tr key={item.id}>
                            <td className="border border-slate-700 text-wrap">{item.name}</td>
                            <td className="border border-slate-700">
                                <button className="w-5 bg-slate-200 mr-4 rounded-xl"
                                    onClick={() => subsAmount(index)}>-</button>
                                {item.amount}
                                <button className="w-5 bg-slate-200 ml-4 rounded-xl"
                                    onClick={() => addAmount(index)}>+</button>
                            </td>
                            <td className="border border-slate-700">${item.price * item.amount}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                <button type="button"
                    className="border border-solid border-gray-900 rounded-md md:w-1/4 w-1/3 mt-4 p-2"
                    onClick={whatsappOrder}>Hacer pedido</button>
                <button type="button"
                    className="border border-solid border-gray-900 rounded-md md:w-1/4 w-1/3 ml-4 p-2"
                    onClick={cancelCart}>Cerrar</button>
            </div>
        </div>
    )
})