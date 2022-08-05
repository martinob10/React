import { useEffect, useState } from "react" ;
import ItemDetail from '../ItemDetail/ItemDetail';
import products from "../../utils/products.mock";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({section}) =>{
  const [listItem, setItem] = useState({})
  const {id} = useParams ()

  const filterId = products.filter((products) => products.id === Number(id))
  const getItem = () => new Promise( (resolve, reject) => {
    setTimeout(() => {
        resolve(filterId[0]);
    }, 2000);
})

useEffect(() => {
    const ItemAwait = async() => {
        try {
            const res = await getItem()
            setItem(res);
        }

        catch(error) {
            console.log(error);
        }
    }
    ItemAwait();
}, []); // eslint-disable-line react-hooks/exhaustive-deps

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