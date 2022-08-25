import ItemCount from './contador/ItemCount';

function ItemListContainer(props) {
  console.log(props.mensaje);
  const mensaje= props.mensaje;
    return (
      <div className="container">
        <p>{mensaje}</p>
    <ItemCount limit={0}/>
      </div>
    );
  }

export default ItemListContainer;