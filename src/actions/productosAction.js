import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_ERROR,
    DESCARGA_PRODUCTOS_EXITO,

    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITO,

    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types'

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
// crear nuevos productos

export function crearNuevoProductoAction(producto){
    return async (disptach) => {
        disptach(agregarProducto());

        try {
            //insertar en la api


          await clienteAxios.post('/productos', producto)

            //si todo sale bien actualizar el state

            disptach(agregarProductoExito(producto))

            // alerta
            Swal.fire('Correcto', 'El producto se agregó correctamente','success')
        } catch (error) {

            // si hay un error cambiar el state
            disptach(agregarProductoError(true))

            // alerta de error 
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })

        }
    }
}


const agregarProducto = () => ({
        type: AGREGAR_PRODUCTO,
        payload: true
})


const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado

})


// si el producto se guarda en la base de datos


const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})


// Funcion que descarga productos en la base de datos

export function obtenerProductosAction() {
    return async (disptach) => {
        disptach(descargarProductos());

        try {
                const respuesta = await clienteAxios.get('/productos')


                disptach(descargarProductosExitosa(respuesta.data))
        } catch (error) {
                disptach(descargarProductosError())
        }
    }
}


const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
})

const descargarProductosExitosa = (productos) => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})  


const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})


//Seleccion y elimina el producto


export function borrarProductoAction(id) {
    return async(disptach) => {
        disptach(obtenerProductoEliminar(id))

        try {
            await  clienteAxios.delete(`/productos/${id}`)
            disptach(eliminarProductoExito())
                // si se elimina mostrar alerta
            Swal.fire(
                'Eliminado!',
                'El producto se elimino correctamente',
                'success'
              )
          
        } catch (error) {
            console.log(error)
            disptach(eliminarProductoError())
        }
    }
}


 const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
})

const eliminarProductoExito = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
})


const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})


// colocar el pruducto en edicion 

export function obtenerProductoEditar(producto) {
    return (disptach) => {
        disptach(obtenerProductoEditarAction(producto))
    }
}


const obtenerProductoEditarAction = producto => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: producto
})