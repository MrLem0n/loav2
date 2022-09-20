import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';
//const cargarImagen= require.context(`../imagenes`,true)
export const Item = ({items}) => {

    return (
      
    <div className="card" key={items.id}  > 
        <div className="card-body">
        <h5 className= "card-tittle">{items.nombre}</h5>
        <img src={items.img} alt={items.nombre}></img>
          <p className="card-text">Precio: ${items.precio}</p>
          <p>Stock: {items.stock}</p>
          <Link to={`/item/${items.id}`}>
                <button className='btn btn-primary'>Ver detalle...</button>
            </Link>
        
        </div>
      </div>
    );
  }

