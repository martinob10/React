import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import{Link} from 'react-router-dom'


const Item = ({data}) => {
  

    const {title, image, price, stock, id} = data


    return(
        //el link hace clickeable el item
        <div  key= {id} className='itemProduct'>
            <Link  to={`/products/${id}`}>
        
                <div className="Item">
                    <img className=' img-item rounded mx-auto img-fluid' src={`/assets/${image}`} alt="Cerradura" />
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <p>Stock: {stock}</p>
                    <ItemCount cantidad={stock}/>
                    <button>Comprar</button>
                    
                </div>
                
                </Link>
        </div>
        
    )
}

export default Item