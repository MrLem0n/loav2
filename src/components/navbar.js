import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CartWidget from "./icons/CartWidget";

import {Link} from "react-router-dom";

function Navbar() {
    return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navbar">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">LOA Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link to="/" className="nav-link active ">Inicio</Link>
            </li>
            <li className="nav-item">
            <Link to="/Contacto" className="nav-link active ">Contacto</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./galeria" >Galeria</a>
            </li>
            
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                
                <Link to='/category/shards' className="dropdown-item">Shards</Link>
                <Link to='/category/pociones' className="dropdown-item">Pociones</Link>
                </div>
            </li>
            <li>
                <CartWidget ></CartWidget>
                
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </React.Fragment>
    );
}

export default Navbar;