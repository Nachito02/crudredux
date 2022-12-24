import React, { useEffect } from "react";
// redux
import {useSelector, useDispatch} from 'react-redux'
import {obtenerProductosAction, } from '../actions/productosAction'
import Producto from "./Producto";
const Productos = () => {

  const disptach = useDispatch()

  useEffect(() =>{
    // consultar la api

    const cargarProductos = () => disptach(obtenerProductosAction()) 
    cargarProductos();
  },[])

  //obbtener productos

  const productos = useSelector(state => state.productos.productos)

  const error = useSelector(state => state.productos.error);
  const cargando = useSelector(state => state.productos.loading)

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
          {error ? <p className="font-weight-bold alert alert-danger text-center mt-6">Hubo un error</p>:null}

          {cargando? <p className="text-center">Cargando...</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dart">
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Acciones</th>

            </tr>
        </thead>

            <tbody>
                  {productos.length === 0 ? <tr>No hay productos</tr> : (
                    productos.map(producto => (
                      <Producto producto={producto} key={producto.id} />
                    ))
                  )}
            </tbody>

      </table>
    </>
  );
};

export default Productos;
