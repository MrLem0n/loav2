import react from "react"
import './itemDet.css'
import {getId} from "../../helper/helpr";
import {useEffect, useState} from 'react';
import {ItemDetail} from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import dataBase from "../../utils/firebase";


export const ItemDetailContainer = ()=>{
    const {prodId} = useParams();

    const [item, setItem] = useState({});


    useEffect(()=>{
        const queryRef = doc(dataBase,"Loascoll",prodId);
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id:response.id
            }
            console.log(newDoc)
            setItem(newDoc);
        }).catch(error=>console.log(error));
        
    },[prodId])


return (
    <div className="detailContainer">
    <h1>Detalle del producto</h1>
    <ItemDetail item={item}></ItemDetail>
    </div>
)
}