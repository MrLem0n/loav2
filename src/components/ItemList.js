import React, { useEffect, useState } from "react";
import {Item} from "./Item";


const arregloProductos = [
{   
    nombre: "Honor Shard Pouch (S)",
    precio : 9,
    cantidad: 50,
    img: "../imagenes/Honor Shard Pouch (S).jpg"
},
{
    nombre: "Honor Shard Pouch (M)",
    precio : 18,
    cantidad: 50,
    img: "../imagenes/Honor Shard Pouch (M).jpg"
},
{ 
    nombre: "Honor Shard Pouch (L)",
    precio : 36,
    cantidad: 50,
    img: "../imagenes/Honor Shard Pouch (L).jpg"

},
{
    nombre: "Harmony Shard Pouch (S)",
    precio : 42,
    cantidad: 50,
    img: "../imagenes/Harmony Shard Pouch (S).jpg"

},
{
    nombre: "Harmony Shard Pouch (M)",
    precio : 85,
    cantidad: 50,
    img: "../imagenes/Harmony Shard Pouch (M).jpg"
},
]

export const Productos = () => {
    const [productos, setProductos] = useState([]);

    const obtenerProductos = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(arregloProductos)
            }, 3000);
        })
    }

    useEffect(()=>{
        const funcionAsincrona = async()=>{
            try {
                const listado = await obtenerProductos();
                setProductos(listado);
                console.log('listado',listado);
            } catch (error) {
                console.log("hubo un error")
            }
        }
        funcionAsincrona();
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






