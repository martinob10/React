// UpperCamelCase

import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <img src="./assets/logo.jpg"   className="img-fluid img-thumbnail w-25 p-3" alt="Logo Ferreteria"></img>    
                  <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                  </form>
                
                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default NavBar