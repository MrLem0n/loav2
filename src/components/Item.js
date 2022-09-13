import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';
//const cargarImagen= require.context(`../imagenes`,true)
export const Item = ({producto}) => {
  const{id,nombre,precio,stock,img}=producto;
    return (
      
    <div className="card" key={id}  > 
        <div className="card-body">
        <h5 className= "card-tittle">{nombre}</h5>
        <img src={img} alt={nombre}></img>
          <p className="card-text">Precio: ${precio}</p>
          <p>Stock: {stock}</p>
          <Link to={`/item/${id}`}>
                <button className='btn btn-primary'>Ver detalle...</button>
            </Link>
        
        </div>
      </div>
    );
  }

