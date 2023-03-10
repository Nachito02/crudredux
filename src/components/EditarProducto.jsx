import React, { useEffect,useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { editarProductoAction } from '../actions/productosAction';
import { useNavigate } from 'react-router-dom';
const EditarProducto = () => {

    const history = useNavigate()

    const dispatch = useDispatch();

    const [producto,setProducto] = useState({
            nombre :"",
            precio: ""
    })



    //producto a editar 

    const productoEditar = useSelector(state => state.productos.productoEditar);
        //llenar el state automaticamente

        useEffect(() =>{
            setProducto(productoEditar)
        }, [productoEditar])

        //leer los datos del form
        const onChangeFormulario = (e) => {
            setProducto({...producto,[e.target.name]:e.target.value})
        }

    const {nombre,precio} = producto

    const submitEditarProducto = (e) => {
        e.preventDefault()
       dispatch( editarProductoAction(producto))
       history('/')
    }
  return (
    <div className='row justify-content-center'>
        <div className='col-md-8' >
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center'>
                        Agregar nuevo producto
                    </h2>

                <form onSubmit={submitEditarProducto}>
                    <div className='form-group'>
                        <label>Nombre Producto</label>
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='Nombre Producto'
                            name="nombre"
                            value={nombre}
                            onChange={onChangeFormulario}
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
                            onChange={onChangeFormulario}

                            />
                    </div>
                    <button 
                    type='submit'
                    className='btn btn-primary font-weight-bold text-uppercase d-block w100'>
                        Agregar
                    </button>
                </form>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditarProducto