import ItemCount from '../contador/ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';




export const ItemDetail = ({item})=> {

  const {addProduct} = useContext(CartContext);

  const [add,setAdd] = useState(0)

    const onAdd = (cantidad) => {
      addProduct(item,cantidad);

      setAdd(cantidad);

    }
    return( 
    <>
    <div className="d-flex justify-content-center" >
       <div className=" card item-detail">
              <img src= {item.img} alt={item.nombre}></img>
              <h2>{item.nombre}</h2>
              <h3>${item.precio}</h3>
              <p>Stock:{item.stock}</p>
              
              <ItemCount  onAdd={onAdd}/>
              </div>


    </div>
    { add !== 0 &&  <Link to={'/cart'}>
<button className="btn btn-primary" style={{width:'100vh'}}>Finalizar compra</button>
</Link>
}
    </>
    )
}

