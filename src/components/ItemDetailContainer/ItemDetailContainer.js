import {itemDetail} from './itemDetail/ItemDetail';

export const itemDetailContainer = ({producto})=> {

    return <div className="d-flex">
    <img src={producto.img}></img>

    </div>
}