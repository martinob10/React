import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCount = ({stock, quantitySelected, productData}) => {
    const { addProductToCart } = useContext(CartContext)
    let stockVirtual = stock
    let disable= false
    const [countQuantity, setCountQuantity] = useState(1)

    const addQuantity = () => {
        setCountQuantity(countQuantity + 1)
    }
    
    const removeQuantity = () => {
        setCountQuantity(countQuantity - 1)
    }
    const onAdd = () => {
        console.log("Agregar al carrito: ", productData)
        addProductToCart(productData)
        quantitySelected(countQuantity)
    }

    return(
        <>
            <div className="container-count">
                <button onClick={removeQuantity} disabled={disable}>-</button>
                <span>{countQuantity}</span>
                <button onClick={addQuantity} disabled={disable}>+</button>
            </div>
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </>
    )
}

export default ItemCount