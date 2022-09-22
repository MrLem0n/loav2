import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import dataBase from '../utils/firebase'
import {ItemList} from './ItemList'


function ItemListContainer() {
  const category = useParams();

  const [productos, setProductos] = useState([]);
  
  useEffect(()=>{
    const getData = async()=>{
        try {
            const queryRef = collection(dataBase,"Loascoll")
            const response = await getDocs(queryRef);
            const datos = response.docs.map(doc=>{
                const newDoc = {
                    ...doc.data(),
                    id:doc.id
                }
                return newDoc;
            });
            console.log("prods",datos);
            setProductos(datos)
        } catch (error) {
            console.log(error);
        }
    }
    getData();
  
  },[category])
 console.log("products",productos)
    return (
      <div className="item-list-container">
            <p>item list container</p>
            <ItemList items={productos}/>
       </div>
    
        
    )  
  }

export default ItemListContainer;