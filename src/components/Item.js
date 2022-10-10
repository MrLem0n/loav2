import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';

export const Item = ({item}) => {

    return (
      
    <div className="card" key={item.id}  > 
        <div className="card-body">
        <h5 className= "card-tittle">{item.nombre}</h5>
        <img className="card-img-top" src={item.img} alt={item.nombre}></img>
          <p className="card-text">Precio: ${item.precio}</p>
          <p>Stock: {item.stock}</p>
          <Link to={`/item/${item.id}`}>
                <button className='btn btn-primary'>Ver detalle...</button>
            </Link>
        
        </div>
      </div>
    );
  }

