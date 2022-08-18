import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navi() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
        <div className="container-fluid">
        <a className="navbar-brand" href="../index.html">LOA Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <a className="nav-link active" href="../index.html">Inicio
                <span className="visually-hidden">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./productos.html" >Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./galeria.html" >Galeria</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Mas</a>
                <div className="dropdown-menu">
                <a className="dropdown-item" href="./quienesSomos.html">Quienes somos</a>
                <a className="dropdown-item" href="./contacto.html">Contacto</a>
                </div>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    );
}

export default Navi;