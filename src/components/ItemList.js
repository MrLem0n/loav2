import React from "react";
import './Item.css'
import {Item} from "./Item";





export const ItemList = ({items}) => {
    return(
        
        <div className="cardsContainer">
            {
            
            items.map(producto=>(
            <Item key={producto.id} item={producto}/>
            ))
        
        }
        </div>
    )
    

}






