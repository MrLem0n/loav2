import honorShardS from "../imagenes/Honor Shard Pouch S.jpg"
import honorShardM from "../imagenes/Honor Shard Pouch M.jpg"
import honorShardL from "../imagenes/Honor Shard Pouch L.jpg"
import harmonyShardS from '../imagenes/Harmony Shard Pouch S.jpg'
import harmonyShardM from "../imagenes/Harmony Shard Pouch M.jpg"
import hpPotion from "../imagenes/HP Potion.png"
import MajorhpPotion from '../imagenes/Major HP Potion.png'
import ElementalhpPotion from '../imagenes/Elemental HP Potion.jpg'
 const arregloProductos = [
    {
        id:0,   
        nombre: "Honor Shard Pouch (S)",
        precio : 9,
        stock: 50,
        img: [honorShardS],
        categoria:'shards',
    },
    {
        id:1,
        nombre: "Honor Shard Pouch (M)",
        precio : 18,
        stock: 50,
        img: [honorShardM],
        categoria:'shards',
    },
    {
        id:2, 
        nombre: "Honor Shard Pouch (L)",
        precio : 36,
        stock: 50,
        img: [honorShardL],
        categoria:'shards',
    
    },
    {
        id:3,
        nombre: "Harmony Shard Pouch (S)",
        precio : 42,
        stock: 50,
        img: [harmonyShardS],
        categoria:'shards',
    
    },
    {
        id:4,
        nombre: "Harmony Shard Pouch (M)",
        precio : 85,
        stock: 50,
        img:[harmonyShardM],
        categoria:'shards',
    },
    { id: 5,
        nombre: "HP Potion",
        precio : 56,
        stock: 50,
        img : [hpPotion],
        categoria:'pociones'
    },
{ id: 6,
        nombre: "Major HP Potion",
        precio : 99,
        stock: 50,
        img : [MajorhpPotion],
        categoria:'pociones'
    },
{ id: 7,
        nombre: "Elemental HP Potion",
        precio : 679,
        stock: 50,
        img : [ElementalhpPotion],
        categoria:'pociones'
    },
    ]

   export const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(arregloProductos)
            reject(err => console.log(err))
        }, 3000)
    })

    export const getId = (productId) => {
        return new Promise((resolve) => {
            setTimeout(() =>{
                resolve(arregloProductos.find(product => product.id === productId))
            }, 3000)
        })
    }
