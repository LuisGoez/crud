import React,{useState} from 'react'
import { isEmpty } from 'lodash'
import shortid from 'shortid'

function App() {
  const [task, setTask] = useState("") 
  const [tasks, setTasks] = useState([])

  const addTask = (e) =>{
    e.preventDefault()  //evitar que nos recargue la pagina por el submit
    if (isEmpty(task)){
      console.log("Task empty")
      return
    }

    const newTaks = {
      id: shortid.generate(),
      name: task
    }
    
    setTasks([ ...tasks, newTaks])
    setTask("")
  }

  return (
    <div className="container mt-5">
      <h1>
        Tareas
        <hr/>
        <div className="row">
          <div className="col-8">
            <h4 className="text-center">Lista de tareas</h4>
            <ul className="list-group">
            {  
             tasks.map((task) =>(

             <li className="list-group-item key={}">
                <span className="lead">{task.name}</span>
                <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
                <button className="btn btn-warning btn-sm float-right">Editar</button>
              </li>
             ))
            } 
            </ul>            
          </div>
          <div className="col-4">
            <h4 className="text-center">Formulario</h4>
            <form onSubmit={addTask}> 
              <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingrese la tarea..."
              onChange={(text) => setTask(text.target.value)}
              value={task}
              />      
              <button 
              className="btn btn-dark btn-block"
              type="submit"
              >Agregar</button>     
            </form>
          </div>
        </div>
      </h1>
    </div>
  )
}

export default App
