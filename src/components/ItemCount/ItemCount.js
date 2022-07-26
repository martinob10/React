import { useState } from 'react'


const ItemCount = (cantidad) => {
    const [contador, setContador] = useState(1)
    const addNumber = () =>{

        
            setContador(contador + 1)
        
    }
    const removeNumber = () =>{
        if (contador > 1){
            setContador(contador - 1)
        }   
    }
    return(
        <div className="ItemCount">
            <div className="ContadorProducto">
                <button onClick={removeNumber}> - </button>
                <p>{contador}</p>
                <button onClick={addNumber}> + </button>
            </div>
        </div>
    )

}

export default ItemCount