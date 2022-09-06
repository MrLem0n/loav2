
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
export const ItemDetail = ({productos})=> {

     return <div className="d-flex justify-content-center">
        <div className=" card item-detail">
                <img src= {productos.img}></img>
                <h2>{productos.nombre}</h2>
                <h3>${productos.precio}</h3>
                <p>Stock:{productos.cantidad}</p>
                
                </div>

     </div>
 }


