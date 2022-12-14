import {useState} from 'react';

const ItemCount = ({stock, onAdd}) => {

    const [cantidad, setCantidad] = useState(0);
    const sumarCantidad = () => cantidad === stock ? setCantidad(stock) : setCantidad(Number(cantidad + 1));
    const restarCantidad = () => cantidad > 0 ? setCantidad(Number(cantidad - 1)) : setCantidad(0);

    return (
        <>
        <div className="container d-flex justify-content-center">
            
            <button className="btn btn-primary" onClick={sumarCantidad}>+</button>
            
        <p id="contar">{cantidad}</p>

            <button className=" btn btn-danger"  onClick={restarCantidad}>-</button>

        </div>
        <button  className="btn btn-secondary" onClick={() => onAdd(cantidad) } ><b id= "boton-carrito">Agregar al carrito</b></button>
        </>
    )
}

export default ItemCount;