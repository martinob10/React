const ItemProduct = ({title, price, image}) => {
    return(
        <div>
            <img src={`/assets/${image}`} alt="Cerradura" />
            <p>{title}</p>
            <span>{price}</span>
            <button>Comprar</button>
        </div>
    )
}

export default ItemProduct