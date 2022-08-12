import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
    

    const { cartProducts, clear, totalProducts } = useContext(CartContext)

   
    return(
        <div>
                
                <div className="container-fluid">
                {cartProducts.length !== 0 && <p>{totalProducts}</p>}
                 <FontAwesomeIcon icon={faCartShopping}/>
                    
                {cartProducts.map((product) => {
                    return(
                        <div className='item-cart-product' key={product.id}>
                            <img src={`/assets/${product.image}`} alt="" />
                            <div className='cart-product__details'>
                                <p>{product.title}</p>
                                
                            </div>
                            <div className='cart-product__details'>
                                <p>$ {product.price}</p>
                            </div>
                            <div className='cart-product__action' >
                                
                            </div>
                        </div>
                    )
                })}
                <button onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</button>

                    

                </div>
                    
            
        </div>
    )
}

export default CartWidget