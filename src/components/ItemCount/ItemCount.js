import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemCount = ({stock, setQuantitySelected, productData}) => {
    const {addProductToCart} = useContext(CartContext)

    const [countQuantity, setCountQuantity] = useState(1)
    
    const addQuantity = () =>{
        setCountQuantity(countQuantity + 1)   
        }   
    
    const removeQuantity = () =>{
        setCountQuantity(countQuantity - 1)
           
    }
    const onAdd = () =>{
        console.log(productData)
        addProductToCart(productData)
        setQuantitySelected(countQuantity)

    }


    return(
        <div className="ItemCount">
            <div className="ContadorProducto">
                <button onClick={removeQuantity}> - </button>
                <p>{countQuantity}</p>
                <button onClick={addQuantity}> + </button>
            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )

}

export default ItemCount