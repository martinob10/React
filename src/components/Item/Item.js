import './Item.css'
import ItemCount from '../ItemCount/ItemCount'


const Item = ({data}) => {
  

    const {title, image, price, stock} = data


    return(
        <div className="ItemProduct">
            <img src={`/assets/${image}`} alt="Cerradura" />
            <p>{title}</p>
            <span>$ {price}</span>
            <p>Stock: {stock}</p>
            <ItemCount cantidad="6"/>
            <button>Comprar</button>
            
        </div>
    )
}

export default Item