import React from "react";
import ItemCount from './contador/ItemCount';

export const Item = ({producto}) => {
    return (
      
    <div className="card" >
        <div className="card-body">
        <h5 className= "card-tittle">{producto.nombre}</h5>
        <img src={producto.img}></img>
          <p className="card-text">{producto.precio}</p>
          <button className = "btn btn-primary">Buy</button>
        </div>
      </div>
    );
  }

