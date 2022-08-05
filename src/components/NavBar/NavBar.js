// UpperCamelCase
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import {Link} from 'react-router-dom'
import Categorias from '../Categorias/Categorias'

const NavBar = () => {
    return(
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                <Link to='/'><img className="logo img-fluid img-thumbnail p-1 m-2" src="../assets/logo.jpg" alt="Logo Ferreteria"></img></Link>
                        
                    <ul className='nav'>
                        <Link to='/'><li className='nav-item p-2'><button className="btn btn-dark">Home</button></li></Link>
                        <Link to='/products'><li className='nav-item p-2'><button className="btn btn-dark">Productos</button></li></Link>
                        <Link to='/contact'><li className='nav-item p-2'><button className="btn btn-dark">Contacto</button></li></Link>
                        <a href='https://www.facebook.com/' target="_blank" rel='noreferrer'><li className='nav-item p-2'><button className="btn btn-primary">facebook</button></li></a>                    
                    </ul>
                

                    <CartWidget />
                </div>
            </nav>
            <section>
                <Categorias />
            </section>
        </div>
    )
}

export default NavBar