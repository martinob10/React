import { useEffect, useState } from "react" 
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import products from '../../utils/products.mock' 

const ItemListContainer = ({section}) => {
    //productos
    const [listProducts, setListProducts ] = useState ([])


    useEffect( () => {
        const getProducts = new Promise ( (resolve, reject) => {
            setTimeout( () => {
                resolve (products)
            }, 2000)
        })
        getProducts
            .then ((res) => {//Respuesta si esta OK
                //console.log("Productos ", data)
                setListProducts(res)
            })
            .catch ( (error) => {//capturar el error si fallo
                console.log()
            })

            .finally( () => {
                console.log()
                //Siempre que termina tanto por ok o error    
            })
    }, [])

    return(
        <div className="list-products">
            <h3>{section}</h3>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer