import { useEffect, useState } from "react" 
import ItemDetailComplet from '../../utils/item.mock' 
import ItemDetail from '../ItemDetail/ItemDetail'
import products from "../../utils/products.mock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({section}) => {
    const [producData, setproductData] = useState({})
    const {id} = useParams()

    useEffect ( () =>{
        filterById()

    }, [])

    const filterById = () =>{
        products.some((product) =>{
            if(product.id == id){
                setproductData(product)
          
            } 
        })

    }





    
    const [detail, setDetail ] = useState ([])

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
                setDetail(res)
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
            <ItemDetail  dataProducts={detail}/>
        </div>
        
    )
}

export default ItemDetailContainer