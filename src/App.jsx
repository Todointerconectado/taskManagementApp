import './App.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Import de components
import Input from './conponents/Input/Input.jsx';
import TasksList from './conponents/TaskList.jsx';
import getCurrentTime from './conponents/getCurrentTime';
import Search from './conponents/SearchBar.jsx';

export default function App() {
  // Hooks: Variables globales. Estado
  const [tasks, setTasks] = useState([]);
  // Estado derivado de tasks.
  const [filteredTasks, setFilteredTasks] = useState([]);
  // Variable de estado para la busqueda.
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");

  // Cuando se monta el componente Guardar las tasks en localStorage.
  useEffect( () => {
    if(tasks.length) 
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  // Función para crear nuevas tareas con la description del input.
  const handleAddTask = (description) => {
    const newTask = {
      id: uuidv4(),
      hours: getCurrentTime(),
      description: description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
    setFilteredTasks([...filteredTasks, newTask]);
    }

  // Guardar lo escrito en search en searchQuery.
  const handleSearchQuery = query => {
    setSearchQuery(query);
    // Filtrar las tareas que coinciden con la description que incluye la cadena de búsqueda 
    // (ignorando mayúsculas y minúsculas).
    const queryResult = tasks.filter(task => 
    // operador de encadenamiento '?' para manejar propiedades potencialmente indefinidas o nulas.
      task?.description?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks([...queryResult]);
  }

  // borrar tarea con el ID
  const handleDelete = (id) => {
    const remainingTasks = tasks.filter(task => task.id !== id);
    setTasks([...remainingTasks]);
    setFilteredTasks([...remainingTasks]);
  };

  // Editar la description del task con el id seleccionada.
    const handEditTask = (description) => {
      alert(' description: ' + description);
    }

  // Combiar el estado de la task.  
  const handleChangeStatus  = (id) => {
    const updatedTasks  = tasks.map(task => 
      
      task.id === id
        ? {...task, isCompleted: !task.isCompleted}
        : task
    );
    setTasks([...updatedTasks ]);
    setFilteredTasks([...updatedTasks ]);
  }

  return (
    <>
      <h1>Apps Gestión de Tareas</h1>
      <Search onSearch={query => handleSearchQuery(query)} />
      <Input onAddTask={description => handleAddTask(description)} />
      <TasksList 
        onTasks={filteredTasks} 
        onChangeStatus={id => handleChangeStatus(id)} 
        onDeleteTask={id => handleDelete(id)} 
        onEditTask={(description) => handEditTask(description)} 
      />
    </>
  );
}