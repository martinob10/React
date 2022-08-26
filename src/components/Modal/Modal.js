

const Modal = ({title, close, children}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            <button onClick={() => close(false)}> x </button>
            
            {children}
        </div>
    )
}

export default Modal