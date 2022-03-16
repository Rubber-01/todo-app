import React from 'react'
//import FormNoControl from './components/FormNoControl'
import Formulario from './components/Formulario'

const task = {
  todoName : "todo #1",
  todoDescripcion : "descripcion de todo #1",
  todoEstado : "pendiente",
  todoCheck : false
}

function App() {
  return (
    <div className='container'>
        <div className="row">
            <h1>Formularios</h1>
            <div className="col-12 col-lg-4">
                <Formulario task={task}/>    
            </div>
        </div>
    </div>
  )
}

export default App