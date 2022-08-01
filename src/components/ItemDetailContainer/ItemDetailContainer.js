import { useEffect, useState } from "react" 
import ItemDetailComplet from '../../utils/item.mock' 
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = ({section}) => {
    
    const [Detail, SetDetail ] = useState ([])

    useEffect( () => {
         //promesa
    const getItemDetailComplet = new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve (ItemDetailComplet[0])
        }, 2000)
    })
        getItemDetailComplet
            .then ((res) => {//Respuesta si esta OK
                //console.log("Productos ", data)
                SetDetail(res)
            })
            .catch ( (error) => {//capturar el error si fallo
                console.log()
            })

            .finally( () => {
                //Siempre que termina tanto por ok o error    
            })
    }, [])

    return(
        <div className="list-products">
            <h3>{section}</h3>
        
            <ItemDetail  dataProducts={Detail}/>
            </div>
        
    )
}

export default ItemDetailContainer