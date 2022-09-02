import React from "react";
import './Item.css';
//const cargarImagen= require.context(`../imagenes`,true)
export const Item = ({producto}) => {
  const{id,nombre,precio,cantidad,img}=producto;
    return (
      
    <div className="card" key={nombre} id = {id} > 
        <div className="card-body">
        <h5 className= "card-tittle">{nombre}</h5>
        <img src={img} alt='...'></img>
          <p className="card-text">Precio: ${precio}</p>
          <p>Stock: {cantidad}</p>
          <button className = "btn btn-primary">Buy</button>
        </div>
      </div>
    );
  }

