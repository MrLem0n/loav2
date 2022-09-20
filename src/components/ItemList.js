import React, { useEffect, useState } from "react";
import {getProducts} from "../helper/helpr";
import {Item} from "./Item";
import { useParams } from "react-router-dom";




export const ItemList = ({items}) => {
    return(
        <div>
        <div className="row">
            {items.map((productos=>
            <Item key={productos.id} items={productos}/>
            ))}
        </div>
        </div>
    )
    

}






