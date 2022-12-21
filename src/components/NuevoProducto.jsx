import React, {useState} from 'react'
// actions de redux 

import { crearNuevoProductoAction } from '../actions/productosAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const NuevoProducto = () => {
    const history = useNavigate()
        //state del componente

        const [nombre, setNombre] = useState('');
        const [precio,setPrecio] = useState(0)

    //utilizar use disptach y te crea un funcion

    const disptach = useDispatch()

    //acceder al state del store

        const cargando = useSelector((state) => state.productos.loading)
        const error = useSelector(state => state.productos.error)

    // mandar llamar el action de producto action
    const agregarProducto = (producto)  => disptach(crearNuevoProductoAction(producto))

    // cuando el usuario haga submit

    const submitNuevoProducto = e =>{
        e.preventDefault();
       
        // validar formulario
        if(nombre.trim() === "" || precio <= 0) {
            return 
        }

        //si no hay errores
        
        //crea el nuevo producto

        agregarProducto({
            nombre,precio
        });
        //redireccionar al 

        history("/")
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-8' >
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center'>
                        Agregar nuevo producto
                    </h2>

                <form onSubmit={submitNuevoProducto}>
                    <div className='form-group'>
                        <label>Nombre Producto</label>
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='Nombre Producto'
                            name="nombre"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            />
                    </div>

                    <div className='form-group'>
                        <label>Precio Producto</label>
                        <input 
                            type="number"
                            className='form-control'
                            placeholder='Nombre Producto'
                            name="precio"
                            value={precio}
                            onChange={e => Number(setPrecio(e.target.value))}

                            />
                    </div>
                    <button 
                    type='submit'
                    className='btn btn-primary font-weight-bold text-uppercase d-block w100'>
                        Agregar
                    </button>
                </form>
                    {cargando  ? <p>Cargando.. </p> : null}
                    {error  ? <p className='alert alert-danger p2 mt-4 text-center'> Hubo un error</p> : null}

                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevoProducto