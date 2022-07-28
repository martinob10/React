import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
    return(
        <div>
            
                <div className="container-fluid">
                    <FontAwesomeIcon icon={faCartShopping}/>
                    
                </div>
            
        </div>
    )
}

export default CartWidget