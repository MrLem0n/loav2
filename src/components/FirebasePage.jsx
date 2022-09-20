import React, { useEffect } from 'react';
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import dataBase from "../utils/firebase";
import { useState } from 'react';
import {ItemDetail} from './itemDetail/ItemDetail';
export const FirebasePage = ()=> {
     const [prods,setProds] = useState([])
  
    useEffect(()=>{
        const getData = async()=>{
            const query = collection(dataBase,"Loascoll")

            const response = await getDocs(query);

            const docs = response.docs;

            const data = docs.map(doc =>{ return{...doc.data(),id:doc.id} })

            setProds(data);
            
        }
        getData();
    })

    return(
        <><h1>A</h1>
        <ItemDetail item={prods[0]}></ItemDetail>
        </>
    )

}

