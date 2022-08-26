import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'
import Modal from '../Modal/Modal'

const Cart = () => {
    const { cartProducts, totalPrice } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)

    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        } ),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrice
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })



    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }


    return(
        
        <div>
            <h1>Carrito de checkout</h1>

            <div className="checkout-page">
            <div className="info-checkout">
                {console.log("order: ", order)}
                <h2>TU CARRITO</h2>
                
                <div className="container-checkout-products">
                    {cartProducts.map( (cartProduct) => {
                        const { title, image, price} = cartProduct
                        return(
                            <div className="checkout-item">
                                <img src={`./assets/${image}`} alt="imagen" />
                                <div >
                                    <p>{title}</p>
                                    <p>Cntidad</p>
                                    <p>$ {price}</p>
                                    <button>X</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
                <div className="info-subtotal">
                    <button onClick={() => setShowModal(true)}>IR A PAGAR</button>
                    <div className="total-purchase">
                        <h3>RESUMEN DE PEDIDO</h3>
                        <div className="item-purchase">
                            <p>2 PRODUCTOS</p>
                            <p>$ 60.000</p>
                        </div>
                        <div className="item-purchase">
                            <p>ENTREGA</p>
                            <p>GRATIS</p>
                        </div>
                        <div className="item-purchase">
                            <p>TOTAL</p>
                            <p>$ 60.000</p>
                        </div>
                    </div>
                </div>
                {showModal && 
                    <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                        {success ? (
                            <>
                               <h2>Su orden se genero correctamente</h2>
                               <p>ID de compra : {success}</p>
                            </>
                        ) : (
                            <form onSubmit={submitData}>
                                <input 
                                    type='text' 
                                    name='name' 
                                    placeholder='Ingrese el nombre'
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                                <input 
                                    type='number' 
                                    name='phone' 
                                    placeholder='Ingrese el telefono' 
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input 
                                    type='email' 
                                    name='email' 
                                    placeholder='Ingrese el mail'
                                    value={formData.email}
                                    onChange={handleChange}

                                />
                                <button type="submit">Enviar</button>
                            </form>
                        )}
                    </Modal>
                }
        </div>
            
            
            
            
        </div>


        
        
        
    )
}

export default Cart