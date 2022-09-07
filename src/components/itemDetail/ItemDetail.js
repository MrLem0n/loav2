
export const ItemDetail = ({item})=> {

    return( <div className="d-flex justify-content-center" id={item.id}>
       <div className=" card item-detail">
               <img src= {item.img}></img>
               <h2>{item.nombre}</h2>
               <h3>${item.precio}</h3>
               <p>Stock:{item.cantidad}</p>
               
               </div>

    </div>)
}

