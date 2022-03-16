import React, { useState } from 'react'
import PrintError from './PrintError'

function Formulario({task}) {
  const [todo, setTodo] = useState(task)
  const [error, setError] = useState(false)

  const handleSubmit = e =>{
    e.preventDefault()

    const {todoName, todoDescripcion}= todo
        if(!todoName.trim() || !todoDescripcion.trim()){
            setError(true)
            return
        }

        setError(false)
  }

  const handleChange =(e)=>{
    const {name, value, type, checked} = e.target

    setTodo(
      {
        ...todo,
        [name] : type === 'checkbox' ? checked : value 
      }
    )
  }
  return (
    <div>
        <h2>Controlado</h2>

        {
          error ? <PrintError /> :null
        }
        
        <form onSubmit={handleSubmit}>
            <input className='form-control mb-3'
             type="text"
             name='todoName'
             placeholder='Titulo de Todo'
             onChange={handleChange}
              value={todo.todoName}
            />
            <textarea className='form-control mb-2' 
                name="todoDescripcion"
                placeholder='Descripcion del Todo'
                onChange={handleChange}
                value={todo.tododescripcion}
            />
            <select name="todoEstado" 
              className='form-control w-25 mb-2'
              onChange={handleChange}
              value={todo.todoEstado}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <div className="form-check">
              <input type="checkbox"
                className="form-check-input"
                name="todoCheck"
                value={todo.todoCheck}
                onChange={handleChange}
              />
              <label className="form-check-label mb-2">
                prioridad
              </label>
            </div>
            <button className='btn btn-primary'>Agregar</button>
        </form>
    </div>
  )
}

export default Formulario