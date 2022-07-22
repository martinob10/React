import ItemProduct from "../ItemProduct/ItemProduct"

const ItemListContainer = ({section}) => {
    return(
        <div className="lista-productos">
            <h3>{section}</h3>
            <ItemProduct title="Cerradura Americana" price="$3.500" image={'cerradura0.jpg'}/>
            <ItemProduct title="Cerradura Italiana" price="$4.500" image={'cerradura2.jfif'}/>
            
        </div>
    )
}

export default ItemListContainer