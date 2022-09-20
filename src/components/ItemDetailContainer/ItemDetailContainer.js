import react from "react"
import './itemDet.css'
import {getId} from "../../helper/helpr";
import {useEffect, useState} from 'react';
import {ItemDetail} from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import dataBase from "../../utils/firebase";



export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [item, setItem] = useState({});

useEffect(()=>{
    const getData = async()=>{
        const query = collection(dataBase,"Loascoll")

        const response = await getDocs(query);

        const docs = response.docs;

        const data = docs.map(doc =>{ return{...doc.data(),id:doc.id} })

        setItem(data);
        
    }
    getData();
},[id]);

return (
    <>
    <h1>ItemDetail</h1>
    <ItemDetail item={item}></ItemDetail>
    </>
)
}