import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom'
const ItemListContainer = ({section}) => {
    const [listProducts, setListProducts] = useState([])
    const { categoryName } = useParams()

    const filterCategory = products.filter((products) => products.category === categoryName)
    
    const getProducts = () => new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (categoryName) {
                resolve(filterCategory)
            }

            else {
                resolve(products)
            }
        });
    })

    useEffect(() => {
        const getProduct = async () => {
            try{
                const responseLog = await getProducts()
                setListProducts(responseLog)

                
            }

            catch(error){ console.log(error) }
        }
        getProduct()
    }, )

    return(
        <div>
            <h4>{section}</h4>
            <div className='listProduct'>
                <ItemList dataProducts={listProducts}></ItemList>
            </div>
        </div>
    )
}

export default ItemListContainer;