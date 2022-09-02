import ItemCount from './contador/ItemCount';
import {ItemList} from './ItemList'


function ItemListContainer(props) {
  console.log(props.mensaje);
  const mensaje= props.mensaje;
    return (
      <div className="d-flex justify-content-center">
        <ItemList/>
    
        
      </div>
    );
  }

export default ItemListContainer;