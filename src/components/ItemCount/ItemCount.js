import { useState } from 'react'


const ItemCount = ({stock, setQuantitySelected}) => {

    const [countQuantity, setCountQuantity] = useState(1)
    
    const addQuantity = () =>{
        setCountQuantity(countQuantity + 1)   
        }   
    
    const removeQuantity = () =>{
        setCountQuantity(countQuantity - 1)
           
    }
    const onAdd = () =>{
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