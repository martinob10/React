import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
    const { cartProducts, clear, totalProducts } = useContext(CartContext)


    return(
        <>
        <div>Carrito de checkout</div>
        {console.log("cartProducts dede checkout: ",cartProducts)}

        <div>
                
                <div className="container-fluid">
                {cartProducts.length !== 0 && <p>{totalProducts}</p>}
                
                    
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
        </>
    )
}

export default Cart