import ItemCount from '../contador/ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';




export const ItemDetail = ({item})=> {

  const {addProduct} = useContext(CartContext);

    const [add,setAdd] = useState(0)

    const {id,nombre,img,precio,stock} = item;
    
    const onAdd = (cantidad) => {
      
      const newProduct={...item, quantity:cantidad}
      
      addProduct(item,cantidad);

      setAdd(cantidad);

    }

   

    return( 
    <>
    <div className="d-flex justify-content-center" id={id}>
       <div className=" card item-detail">
              <img src= {img} alt={nombre}></img>
              <h2>{nombre}</h2>
              <h3>${precio}</h3>
              <p>Stock:{stock}</p>
              
              <ItemCount stock= {stock} onAdd={onAdd}/>
              </div>


    </div>
    { add !== 0 &&  <Link to={'/cart'}>
<button className="btn btn-primary" style={{width:'100vh'}}>Finalizar compra</button>
</Link>
}
    </>
    )
}

