import ItemCount from '../contador/ItemCount';
import {useState} from 'react';
import {Link} from 'react-router-dom';
export const ItemDetail = ({item})=> {
    const [add,setAdd] = useState(false)

    const {id,nombre,img,precio,stock} = item;
    
    const onAdd = ({cantidad}) => {
      setAdd(!add)
    }

   

    return( 
    <>
    <div className="d-flex justify-content-center" id={id}>
       <div className=" card item-detail">
               <img src= {img} alt={nombre}></img>
               <h2>{nombre}</h2>
               <h3>${precio}</h3>
               <p>Stock:{stock}</p>
               
               {   add ? "" :<ItemCount stock= {stock} onAdd={onAdd}/>
                  
               }
                
            
                
               </div>

             

    </div>
     { !add ? "" :  <Link to={'/cart'}>
    <btn className="btn btn-primary" style={{width:'100vh'}}
   >Finalizar compra</btn>
    </Link>
}
    </>
    )
}

