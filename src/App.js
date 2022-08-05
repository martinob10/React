import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import Detail from './pages/Details';



function App() {
  //fetch ('https://jsonplaceholder.typicode.com/users')
  //.then((response) =>{
  //  return response.json
  //})
  //.then((data)=>{
  //  console.log(data)
  //})
  return (
    <BrowserRouter>
      
          <h1 className='text-center'>Ecommerce Coder</h1>
          <NavBar />
          <Routes>

            <Route path='/' element={<Home /> }/>

            <Route path='/contacto' element={<Contacto/>}/>

            <Route path='/productos' element={<Productos/>}/>
            <Route path='/productos/:id' element={<Detail/>}/>


            <Route path='*' element={<h2 className='text-center'>Error 404</h2>}/>
          </Routes>

    </BrowserRouter>
   
  );
}

export default App;
