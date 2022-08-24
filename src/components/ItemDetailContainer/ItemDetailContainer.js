import { useEffect, useState } from "react" ;
import ItemDetail from '../ItemDetail/ItemDetail';
import products from "../../utils/products.mock";
import { useParams } from "react-router-dom";
//Firebase
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = ({section}) =>{
  const [listItem, setItem] = useState({})
  const {id} = useParams ()

  const filterId = products.filter((products) => products.id === Number(id))
  const getItem = () => new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve(filterId[0]);
    }, 2000);
})

useEffect( () => {
    getProduct()
    .then((res) => {
        setItem(res)
    })
}, [id])

const getProduct = async () => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc(docRef)
    let product = docSnapshot.data()
    product.id = docSnapshot.id
    console.log('data con id:', product)
    return product
}



return(
    <div>
        <h4>{section}</h4>
        <div className="container">
            <ItemDetail dataProducts={listItem} />
        </div>
    </div>
)
}

export default ItemDetailContainer;