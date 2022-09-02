import ItemCount from './contador/ItemCount';
import {Productos} from './ItemList'


function ItemListContainer(props) {
  console.log(props.mensaje);
  const mensaje= props.mensaje;
    return (
      <div className="container">
        <p>{mensaje}</p>
    
        
      </div>
    );
  }

export default ItemListContainer;