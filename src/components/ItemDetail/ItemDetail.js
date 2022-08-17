import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({dataProducts}) => {

    const [quantitySelected, setQuantitySelected] = useState(1)

    const {title, price, peso, garantia, importada, image, stock} = dataProducts

    return(
        <>
        <div className="item-detail">
            <img src ={`/assets/${image}`} alt="."/>

            <p>{title}</p>
            <span>$ {price}</span>
            <p>Peso: {peso}</p>
            <p>Garantia: {garantia}</p>
            <p>Importada: {importada}</p>
            <p>stock: {stock}</p>

            
        </div>
        {console.log(quantitySelected)}

        {quantitySelected > 1 ? <Link to="/cart"><button>Terminar</button></Link> : 
        <ItemCount setQuantitySelected={setQuantitySelected} productData={dataProducts}/>}
        </>
    )
}

export default ItemDetail