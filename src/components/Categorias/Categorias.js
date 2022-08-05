
import { Link } from 'react-router-dom';
const Cartegorias = () => {
    return(
        <div className="container">
            <ul className='nav'>
                    <Link as={Link} to='category/linea_eonomica'><li className='nav-item p-2'>Linea Economica</li></Link>
                    <Link to='category/linea_plata'><li className='nav-item p-2'>Linea Plata</li></Link>
                    <Link to='category/linea_gold'><li className='nav-item p-2'>Linea Gold</li></Link>                   
            </ul>
        </div>
      
    )
}

export default Cartegorias