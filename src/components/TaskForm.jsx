import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("")

  const {createTask}= useContext(TaskContext)


  const handleSubmit = (e) => {
    e.preventDefault();  
    createTask({
      title,
      descripcion
    });
    setTitle("")
    setDescripcion("")
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-900 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input placeholder="Escriba su tarea" onChange={(e) => 
          setTitle(e.target.value)} 
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          />
        <textarea className="bg-slate-300 p-3 w-full mb-2" placeholder="Escribe la tarea a realizar" onChange={e=> setDescripcion(e.target.value)} value={descripcion}></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white"
        >Agregat Tarea</button>
      </form>
    </div>
  );
}

export default TaskForm;
