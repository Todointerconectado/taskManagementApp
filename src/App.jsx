import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Import de components
import Input from './conponents/Input';
import TasksList from './conponents/TaskList';

export default function App() {
  // Hooks: Variables globales.
  const [tasks, setTasks] = useState([]);

  // Función para crear nuevas tareas con la descripción del input.
  const handleAddTask = (description) => {
    
    const newTask = {
      id: uuidv4(),
      description: description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
  }
  // borrar tarea con el ID
  const handleDeleteTask = (id) => {
    // borrar tarea que coincida con el ID.
  };


  return (
    <>
      <h1>Apps Gestión de Tareas</h1>
      <Input onAddTask={(description) => handleAddTask(description)} />
      <TasksList tasks={tasks}/>
    </>
  );
}