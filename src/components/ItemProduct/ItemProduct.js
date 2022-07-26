import { useState } from 'react'
import './ItemProduct.css'

const ItemProduct = ({data}) => {
    //contador
    const [contador, setContador] = useState(1)

    const {title, image, price} = data

    const addNumber = () =>{
        setContador(contador + 1)
    }

    const removeNumber = () =>{
        setContador(contador - 1)
    }


    return(
        <div className="ItemProduct">
            <img src={`/assets/${image}`} alt="Cerradura" />
            <p>{title}</p>
            <span>$ {price}</span>
            <div className="ContadorProducto">
                <button onClick={removeNumber}> - </button>
                <p>{contador}</p>
                <button onClick={addNumber}> + </button>
            </div>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct