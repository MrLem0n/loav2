import ItemCount from './contador/ItemCount';
import Item from './Item';


function ItemListContainer(props) {
  console.log(props.mensaje);
  const mensaje= props.mensaje;
    return (
      <div className="container">
        <p>{mensaje}</p>
    
    <ItemCount limit={0} stock={10}/>
      </div>
    );
  }

export default ItemListContainer;