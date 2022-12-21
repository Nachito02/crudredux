import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <Link to={'/'}> <h1> CRUD - React - Redux -Rest API & Axios </h1></Link> 
      </div>

      <Link to={'/productos/nuevo'} 
      className="btn btn-danger nuevo-post d-block d-md-inline-block "
        href="/productos/nuevo" >   
                 Agregar Producto +
        </Link>
    </nav>
  );
};

export default Header;
