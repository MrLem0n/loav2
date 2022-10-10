import React from 'react';
import {img0,img1,img2,img3,img4,img5,img6,img7,img8,img9} from '../../helper/helpr'
import "./pages.css"
 export const Gallery = ()=>{

return (
    <div className="container-imgs">
    <img src= {[img1]} alt="" className="img-fluid"></img>
    <img src= {[img2]} alt="" className="img-fluid"></img>
    <img src= {[img3]} alt="" className="img-fluid"></img>
    <img src= {[img4]} alt="" className="img-fluid"></img>
    <img src= {[img5]} alt="" className="img-fluid"></img>
    <img src= {[img6]} alt="" className="img-fluid"></img>
    <img src= {[img7]} alt="" className="img-fluid"></img>
    <img src= {[img8]} alt="" className="img-fluid"></img>
    <img src= {[img9]} alt="" className="img-fluid"></img>
    <img src= {[img0]} alt="" className="img-fluid"></img>
    </div>
)
 }