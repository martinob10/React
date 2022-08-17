
import './Item.css'
import{Link} from 'react-router-dom'



const Item = ({data}) => {
   
    const {title, image, price, id, stock} = data


    return(
        //el link hace clickeable el item
        <div  key= {id} className='itemProduct'>
            <Link  to={`/products/${id}`}>
        
                <div className="Item">
                    <img className=' img-item rounded mx-auto img-fluid' src={`/assets/${image}`} alt="Cerradura" />
                    <p>{title}</p>
                    
                    <span className="card-title">$ { price }</span>
                    <p>Stock: {stock}</p>
                    
                </div>
                
                </Link>
              
        </div>
        
    )
}

export default Item