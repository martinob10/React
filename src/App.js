import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contacto from './pages/Contacto';
import Checkout from './pages/Checkout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';



function App() {
  //fetch ('https://jsonplaceholder.typicode.com/users')
  //.then((response) =>{
  //  return response.json
  //})
  //.then((data)=>{
  //  console.log(data)
  //})
  return (


    <CartProvider>
      <BrowserRouter>
        
            <h1 className='text-center'>Ecommerce Coder</h1>
            <NavBar />
            <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/products' element={<ItemListContainer/>} />
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/products/:id' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<Contacto />} />
            <Route path='/cart' element={<Checkout />} />
            <Route path='*' element={<h1>Error 404</h1>} />
          </Routes>

      </BrowserRouter>
    </CartProvider>
   
  );
}

export default App;