import ItemListContainer from "../components/ItemListContainer/ItemListContainer"


const Productos = () => {
    return (
       <div className='d-flex row'>
                <div className='productos'>
                    <h2>Productos: </h2>
                    <ItemListContainer />
                </div>
        </div>
    )
}

export default Productos