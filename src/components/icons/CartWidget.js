import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext'
import { Link} from 'react-router-dom';
import Carrito from '../../imagenes/carrito.png';

function WidgetCart() {
  const {getTotalProducts, productCartList} = useContext(CartContext);
    return (
      <div>
            {
                productCartList.length>0 &&
                <>
                    <Link to="/cart">
                    <img src={Carrito} alt='carrito compras' style={{width:40}}></img>
                    </Link>
                    <span style={{backgroundColor: 'white', borderRadius:"75%", width:"100px", heigth:"100px", fontSize:"20px", color:"black"}}>
                        {getTotalProducts()}
                    </span>
                </>
            }
        </div>
   
      
    );
  }

export default WidgetCart;