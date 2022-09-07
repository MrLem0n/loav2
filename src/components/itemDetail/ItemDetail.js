
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
export const ItemDetail = ({producto})=> {

     return <div className="d-flex justify-content-center">
        <div className=" card item-detail">
                <img src= {producto.img}></img>
                <h2>{producto.nombre}</h2>
                <h3>${producto.precio}</h3>
                <p>Stock:{producto.cantidad}</p>
                
                </div>

     </div>
 }


