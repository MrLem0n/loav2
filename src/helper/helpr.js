import honorShardS from "../imagenes/Honor Shard Pouch S.jpg"
import honorShardM from "../imagenes/Honor Shard Pouch M.jpg"
import honorShardL from "../imagenes/Honor Shard Pouch L.jpg"
import harmonyShardS from '../imagenes/Harmony Shard Pouch S.jpg'
import harmonyShardM from "../imagenes/Harmony Shard Pouch M.jpg"

const arregloProductos = [
    {
        id:0,   
        nombre: "Honor Shard Pouch (S)",
        precio : 9,
        cantidad: 50,
        img: [honorShardS]
    },
    {
        id:1,
        nombre: "Honor Shard Pouch (M)",
        precio : 18,
        cantidad: 50,
        img: [honorShardM]
    },
    {
        id:2, 
        nombre: "Honor Shard Pouch (L)",
        precio : 36,
        cantidad: 50,
        img: [honorShardL]
    
    },
    {
        id:3,
        nombre: "Harmony Shard Pouch (S)",
        precio : 42,
        cantidad: 50,
        img: [harmonyShardS]
    
    },
    {
        id:4,
        nombre: "Harmony Shard Pouch (M)",
        precio : 85,
        cantidad: 50,
        img:[harmonyShardM]
    },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arregloProductos)
            reject(err => console.log(err))
        }, 3000)
    })

    export default getProducts