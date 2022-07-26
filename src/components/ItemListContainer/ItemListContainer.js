import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.css'

const ItemListContainer = ({section}) => {
    //productos
    const producto1 = {
        title: "Cerradura Americana",
        price: 3500,
        image: 'cerradura0.jpg'
    }
    const producto2 = {
        title: "Cerradura Americana",
        price: 4500,
        image: 'cerradura2.jfif'
    }
    return(
        <div className="lista-productos">
            <h3>{section}</h3>
            <ItemProduct data={producto1}/>
            <ItemProduct data={producto2}/>
            
        </div>
    )
}

export default ItemListContainer