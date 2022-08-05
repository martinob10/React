import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Home = () => {
    return (
        <div className="App">
            <div className='d-flex row'>
                <div className='productos'>
                    <h2>Listas de Productos:</h2>
                    <ItemListContainer section="Destacados:" />
                </div>
            </div>
        </div>
    )
}

export default Home