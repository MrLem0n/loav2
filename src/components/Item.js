import React from "react";

const Item = ({prod}) => {
    return (
      
    <div class="card" >
        <div class="card-body">
        <h5 class= "card-tittle">{prod.nombre}</h5>
          <p class="card-text">{prod.precio}</p>
          <button id= "botonCompra">Buy</button>
        </div>
      </div>
    );
  }

export default Item;