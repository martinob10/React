import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom' 
import { collection, getDocs } from "firebase/firestore"
import db from "../../firebaseConfig"

const ItemListContainer = ({section}) => {
    const [listProducts, setListProducts] = useState([])
    const { categoryName } = useParams()

    //const filterCategory = products.filter((products) => products.category === categoryName)
    
    /*const getProducts = () => new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (categoryName) {
                resolve(filterCategory)
            }

            else {
                resolve(products)
            }
        });
    })*/

    const getProducts = async () => {
        
        const productCollection = collection(db, 'productos')
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProducts(res)
        })
       /* const getProduct = async () => {
            try{
                const responseLog = await getProducts()
                setListProducts(responseLog)

                
            }

            catch(error){ console.log(error) }
        }
        getProduct()*/
    }, [])

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