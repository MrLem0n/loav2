import React, { useEffect, useState } from "react";
import {getProducts} from "../helper/helpr";
import {Item} from "./Item";
import { useParams } from "react-router-dom";




export const ItemList = () => {
    const {category} = useParams();
    const [productos, setProductos] = useState([]);



    useEffect(()=>{
        getProducts.then(productos => {
            if(!category) {
            setProductos(productos)
            } else {
                const filtrada= productos.filter(product=>product.categoria===category)
                setProductos(filtrada)
                console.log(filtrada)
            }
        })
    },[category])

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






