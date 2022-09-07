import react from "react"
import './itemDet.css'
import {getId} from "../../helper/helpr";
import {useEffect, useState} from 'react';
import {ItemDetail} from '../itemDetail/ItemDetail'
import { useParams } from "react-router-dom";


export const ItemDetailContainer = ()=>{
    const {id} = useParams();
    const [item, setItem] = useState({});

useEffect(()=>{
    const getdata = getId(parseInt(id));
    getdata.then((result)=>{
        setItem(result);
    });
},[id]);

return (
    <>
    <h1>ItemDetail</h1>
    <ItemDetail item={item}></ItemDetail>
    </>
)
}