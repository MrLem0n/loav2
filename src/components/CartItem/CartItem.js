import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import './CartItem.css';

export const CartItem = ({item}) => {
    const {removeProduct} = useContext(CartContext);
    console.log(item);
    return (
        
        <div className='cart-item-container container'>
            
            <div className='cart-img-container'>
                <img src={item.img} alt={item.nombre}/>
            </div>
            <div className='cart-info-container'>
                <b>
                <p>{item.nombre}</p>
                <p>precio unitario: ${item.precio}</p>
                <p>cantidad: {item.cantidad}</p>
                <p>Precio total: ${item.totalPrice}</p>
                </b>
                <button className='btn btn-danger' onClick={()=>removeProduct(item.id)}>Eliminar producto</button>
            </div>
        </div>
    )
}