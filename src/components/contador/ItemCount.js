import {useState} from 'react';

 const ItemCount = (props) => {

    const limit = props.limit;

    const [contador, setContador] = useState(0);

    const incrementar = ()=> {
        if (contador >= limit & contador <props.stock) {
            setContador(contador + 1) 
        }
        
    }

    const decrementar = ()=> {
        if (contador > limit) {
            setContador(contador -1)
        }
        
    }

    return (
        <div className="container d-flex justify-content-center">
            
            <button className="btn btn-primary" onClick={incrementar}>+</button>
            
            <p id="contar">{contador}</p>

            <button className=" btn btn-primary" onClick={decrementar}>-</button>
        </div>
    )
}

export default ItemCount;