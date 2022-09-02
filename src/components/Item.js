import React from "react";

//const cargarImagen= require.context(`../imagenes`,true)
export const Item = ({producto}) => {
    return (
      
    <div className="card" key={producto.nombre}> 
        <div className="card-body">
        <h5 className= "card-tittle">{producto.nombre}</h5>
        <img src={producto.img}></img>
          <p className="card-text">{producto.precio}</p>
          <p>Stock: {producto.cantidad}</p>
          <button className = "btn btn-primary">Buy</button>
        </div>
      </div>
    );
  }

