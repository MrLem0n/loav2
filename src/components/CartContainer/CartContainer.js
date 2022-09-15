import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { CartItem } from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

export const CartContainer = () => {
  const {productCartList, clearProductCartList} = useContext(CartContext);

  return (
    <div className='container-fluid'>
      <p>CartContainer</p>
      <div>
        {
          productCartList.length>0 ?
          <>
            {
              productCartList.map(item=>(
                <CartItem key={item.id} item={item}/>
              ))
            }
            <hr/>
            <button className="btn btn-danger" onClick={clearProductCartList}>Vaciar el carrito</button>
          </>
          :
          <div>
          <p>No has agregado productos</p>

          <Link to="/">
            <button className= "btn btn-primary">Quiero agregar productos</button>
          
          </Link>
          </div>
        }
      </div>
    </div>
  )
}