import React, { useRef } from 'react'

function FormNoControl() {
    const formulario = useRef(null)

    const handleSubmit = e =>{
        e.preventDefault()
        
        const datos = new FormData(formulario.current) //captura el valor name del formulario 
        // console.log(...datos.entries()) //entries es el valor de los datos del formulario

        const objectDatos = Object.fromEntries([...datos.entries()])// convertir los valores en obejtos del rray
        console.log(objectDatos)

        const {todoName, todoDescripcion}= objectDatos
        if(!todoName.trim() || !todoDescripcion.trim()){
            console.log("Esa mierda esta vacio pedazo de ijueputa")
            return
        }
    }

  return (
    <div>
        <h3>No Controlados</h3>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input className='form-control mb-3'
             type="text"
             name='todoName'
             placeholder='Titulo de Todo'

             defaultValue="Titulo del todo #1"
            />
            <textarea className='form-control mb-2' 
                name="todoDescripcion"
                placeholder='Descripcion del Todo'
                defaultValue="Description del todo #2"
            />
            <select name="todoEstado"
                defaultValue="pendiente" 
                className='form-control w-25 mb-2'>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button className='btn btn-primary'>Agregar</button>
        </form>
    </div>
  )
}

export default FormNoControl