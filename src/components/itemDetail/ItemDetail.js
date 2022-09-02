import {useEffect, useState} from 'react'
import getProducts from "../../helper/helpr";
import './ItemDetail.css';
 const ItemDetail = () => {
    const [productos, setProductos] = useState([]);



    useEffect(()=>{
        getProducts.then(response =>
            {
                setProductos(response.find(prod => prod.id === 1))
            })
    },[])

console.log(productos);
const{id,nombre,precio,cantidad,img}=productos;
return (
    <div className="item-container">
    <h1>Item Detail container</h1>
    {
        <div className=" card item-detail">
            <img src= {img}></img>
            <h2>{nombre}</h2>
            <h3>${precio}</h3>
            <p>Stock:{cantidad}</p>
            
            </div>
    }
    </div>
)

}

export default ItemDetail
