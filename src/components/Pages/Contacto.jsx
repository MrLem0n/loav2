import React from 'react';
import './pages.css';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import dataBase from '../../utils/firebase';
import { collection,addDoc } from 'firebase/firestore';
export const Contacto= ()=>{
  const {productCartList,getTotalPrice } = useContext(CartContext);
 const sendOrder = (e)=> {
   e.preventDefault();
   const order = {
     comprador: {
  
        nombre: e.target[1].value,
        telefono: e.target[2].value,
       email: e.target[3].value,
       domicilio: e.target[4].value
     },
   items: productCartList,
   precioFinal:getTotalPrice()
   }
   const queryRef = collection(dataBase,"ordenes");
  addDoc(queryRef,order).then(response => console.log(response));
   console.log(order)
 }
    return(
        <div> <h1>Contacto</h1>
        <form onSubmit={sendOrder}>
            <fieldset className="container-fluid">
            <div className="row justify-content-center">
              
                <div className=" col-12 col-lg-7 form-group">
                <input type="text" className="form-control" placeholder="Nombre"></input>
                </div>
                <div className=" col-12 col-lg-7 form-group">
                <input type="text" className="form-control"  placeholder="Introduzca su telefono"/>
                
                <div className=" col-12 col-lg-7 form-group">
                <input type="text" className="form-control" placeholder="email"></input>
                </div>
                <small id="emailHelp" className="form-text text-muted">Nunca compartiremos su email a nadie mas.</small>
                
                <div className=" col-12 col-lg-7 form-group">
                <input type="text" className="form-control" placeholder="Domicilio"></input>
                </div>
            </div>

              <button type='submit' className="btn btn-primary" id="botoncito">Enviar</button>
            </div>
              </fieldset>
              </form>
              </div>
    )
}