import React from 'react';
import './pages.css';
export const Contacto= ()=>{
    return(
        <div> <h1>Contacto</h1>
        <form>
            <fieldset className="container-fluid">
              <h2 className="text-center " >Dejanos tu mensaje</h2>
            <div className="row justify-content-center">
              
                <div className=" col-12 col-lg-7 form-group">
                <label for="exampleInputEmail1" className="form-label mt-4">Direccion de correo</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduzca su email"/>
                <small id="emailHelp" className="form-text text-muted">Nunca compartiremos su email a nadie mas.</small>
            </div>
              <div clasName="col-12 col-lg-7 form-group">
                <label for="exampleSelect1" className="form-label mt-4">seleccione su país</label>
                <select className="form-select" id="exampleSelect1">
                  <option>Argentina</option>
                  <option>Peru</option>
                  <option>Chile</option>
                  <option>Colombia</option>
                  <option>Paraguay</option>
                </select>
              </div>
              <div className="col-12 col-lg-7 form-group">
                <label for="mensaje" className="form-label mt-4">Su mensaje:</label>
                <textarea className="form-control fluid" id="mensaje" rows="3"></textarea>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" for="flexSwitchCheckDefault">Deseo recibir actualizaciones por correo</label>
              </div>
              <button className="btn btn-primary" id="botoncito">Enviar</button>
            </div>
              </fieldset>
              </form>
              </div>
    )
}