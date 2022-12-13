import { useState } from 'react'
import Mensaje from './Mensaje';


function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValidPresupuesto}) {

    const [mensaje, setMensaje] = useState('')

    function handlePresupuesto(e){
        e.preventDefault();

        if(!presupuesto || presupuesto < 0){
            setMensaje("Valor no válido")
            return
        }
        setMensaje('')
        setIsValidPresupuesto(true)
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handlePresupuesto}>
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input 
                        type="number" 
                        className='nuevo-presupuesto' 
                        placeholder='Añade tu presupuesto' 
                        value={presupuesto} 
                        onChange={(e)=> setPresupuesto(Number(e.target.value))}
                        />
                    <input type="submit" value="Añadir" />
                </div>

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto