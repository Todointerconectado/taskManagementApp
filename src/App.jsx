import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Import de components
import Input from './conponents/Input/Input.jsx';
import TasksList from './conponents/TaskList.jsx';
import getCurrentTime from './conponents/getCurrentTime';

export default function App() {
  // Hooks: Variables globales. Estado
  const [tasks, setTasks] = useState([]);

  // Función para crear nuevas tareas con la descripción del input.
  const handleAddTask = (description) => {
    const newTask = {
      id: uuidv4(),
      hours: getCurrentTime(),
      description: description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
  }

  // borrar tarea con el ID
  const handleDelete = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks([...remainingTasks]);
  };

  // Editar la descripción del task con el id seleccionada.
    const handEditTask = (descripción) => {
      alert(' Descripción: ' + descripción);
    }

  // Combiar el estado de la task.  
  const handleChangeStatus  = (id) => {
    const updatedTasks  = tasks.map(task => 
      
      task.id === id
        ? {...task, isCompleted: !task.isCompleted}
        : task
    );
    setTasks([...updatedTasks ]);
  }

  return (
    <>
      <h1>Apps Gestión de Tareas</h1>
      <Input onAddTask={description => handleAddTask(description)} />
      <TasksList 
        tasks={tasks} 
        onChangeStatus={id => handleChangeStatus(id)} 
        onDeleteTask={id => handleDelete(id)} 
        onEditTask={(description) => handEditTask(description)} 
      />
    </>
  );
}