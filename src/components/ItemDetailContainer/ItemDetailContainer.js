import react from "react"
import './itemDet.css'
import getProducts from "../../helper/helpr";
import {useEffect, useState} from 'react'
import {ItemDetail} from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    
    
    
        useEffect(()=>{
            getProducts.then(response =>
                {
                    setProductos(response.find(prod => prod.id === 0))
                })
        },[])
    
    console.log(productos);
  
    return (
        <div className="item-container">
        <h1>Item Detail</h1>
        {
        <ItemDetail productos={productos}></ItemDetail>
        /* {
            <div className=" card item-detail">
                <img src= {img}></img>
                <h2>{nombre}</h2>
                <h3>${precio}</h3>
                <p>Stock:{cantidad}</p>
                
                </div>
        } */}
        </div>
    )
    
    }
    
    export default ItemDetailContainer
