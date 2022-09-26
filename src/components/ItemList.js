import React, { useEffect, useState } from "react";
import {getProducts} from "../helper/helpr";
import {Item} from "./Item";
import { useParams } from "react-router-dom";




export const ItemList = ({items}) => {
    return(
        <div>
        <div className="d-flex justify-content-center">
            {
            
            items.map(producto=>(
            <Item key={producto.id} item={producto}/>
            ))
        
        }
        </div>
        </div>
    )
    

}






