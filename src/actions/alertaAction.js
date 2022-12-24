import { MOSTRAR_ALERTA, OCULTAR_ALERTA} from "../types";


export function mostrarAlerta(alerta) {
    return (dispatch) =>{
        dispatch(mostrarAlertaError(alerta))
    }
}


const mostrarAlertaError = (alerta) =>({
        type:MOSTRAR_ALERTA,
        payload: alerta
})


// ocular alerta

export function ocultarAlertaAction () {
    return(dispatch) => {
        dispatch(ocultarAlerta())
    }
}


const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})