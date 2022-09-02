import React, { useEffect, useState } from "react";
import getProducts from "../helper/helpr";
import {Item} from "./Item";




export const ItemList = () => {
    const [productos, setProductos] = useState([]);



    useEffect(()=>{
        getProducts.then(productos => {
            setProductos(productos)
        })
    },[])

    return (
        <div className='listContainer'>
            
            <div className='cardsContainer'>
                {
                    productos.map((producto)=>{
                        return(
                            <Item producto={producto}/>
                        )
                    })
                }
            </div>
        </div>
    )
}






