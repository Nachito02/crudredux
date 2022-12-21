import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
//import redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productosAction'

const Producto = ({producto}) => {
    const {nombre,precio,id} = producto

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // confirmr si desea eliminar

    const confirmarEliminarProducto = id => {
        // preguntar al usuario

        Swal.fire({
          title: 'Estas seguro?',
          text: "Un producto que se elimina no se puede recuperar",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, eliminar!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {

             //pasarlo al action
           dispatch(borrarProductoAction(id))
          }
        })
    }

    // funcion que redirige de forma avanzda

    const redireccionarEdicion = producto => {
         dispatch(obtenerProductoEditar(producto))
          navigate(`/productos/editar/${id}`)
    }

  return (
   <tr>
    <td>{nombre}</td>
    <td><span className='font-weight-bold'>${precio}</span></td>
    <td className='acciones'>
        <button  type='button' onClick={() => redireccionarEdicion(producto)} className="btn btn-primary mr-2">Editar</button>

        <button type='button' onClick={() => confirmarEliminarProducto(id)} className='btn btn-danger'>Eliminar</button>
    </td>

   </tr>
  )
}

export default Producto