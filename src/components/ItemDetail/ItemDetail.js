
const ItemDetail = ({dataProducts}) => {
  
    const {title, price, peso, garantia, importada} = dataProducts

    return(         
        <div className="item-detail">

            <p>{title}</p>
            <span>$ {price}</span>
            <p>Peso: {peso}</p>
            <p>Garantia: {garantia}</p>
            <p>Importada: {importada}</p>
            
        </div>
    )
}

export default ItemDetail