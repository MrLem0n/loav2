import React, { useEffect, useState } from "react";
import Item from "./Item";


const arregloItems = [{ id: 0,
nombre: "Honor Shard Pouch (S)",
precio : 9,
cantidad: 50,
},
{ id: 1,
nombre: "Honor Shard Pouch (M)",
precio : 18,

cantidad: 50,

},
{ id: 2,
nombre: "Honor Shard Pouch (L)",
precio : 36,
cantidad: 50,

},
{ id: 3,
nombre: "Harmony Shard Pouch (S)",
precio : 42,
    
cantidad: 50,

},

{id: 4,
nombre: "Harmony Shard Pouch (M)",
precio : 85,
    
cantidad: 50,}


]
export const Landing = () => {
    const [productos, setProductos] = useState([]);

    const obtenerProductos = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(arregloItems)
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
                            <Item prod={producto}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

// export function ItemList() {

// const [items, setItems] = useState([])

// const obtenerProds= ()=> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
            
//             resolve(arregloItems)
//         }, 3000);

    
//     })
// }



// useEffect(() => {const asincronia = async() => {
//     try {
//         const list = await obtenerProds();
//         setItems(list);
//         console.log('list', list);
//     } catch (error) {
//     console.log('error');
//     }
    
// }
// asincronia();

// },[])

//     return (
//         <div className="row">
//          {
//                     items.map((prods)=>{
//                         return(
//                             <Item prod={prods}/>
//                         )
//                     })
//                 }
//         </div>
//     );
// }