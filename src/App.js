import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <div className='d-flex row'>
      <h1>Ecommerce Coder</h1>
      <NavBar />
      </div>
      
      <div className='productos'>
        <h2>Listas de Productos:</h2>
        <ItemListContainer section="Destacados:" />
        
      </div>

      
    </div>
  );
}

export default App;
