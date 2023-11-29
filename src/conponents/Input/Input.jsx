import './Input.css';
import { FaPlus } from "react-icons/fa";
import PropTypes from 'prop-types';

Input.propTypes = {
    onAddTask: PropTypes.func.isRequired,
};

export default function Input({ onAddTask }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear una instancia de FormData utilizando el form que desencadenó el evento de envío (submit).
        const originForm = new FormData(e.target);

        const description = originForm.get('description');

        onAddTask(description);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description"> 
                <span>*</span> 
                Escribir nueva tarea:
            </label>
            <input 
                type="text"  
                name="description" 
                id="description" 
                placeholder="Ej: Ir al GIM..." 
                title="input" 
                aria-label="Escribir tarea nueva" 
                required
            />
            <button className="submit" type="submit">
                <FaPlus className='icon'/>
            </button>
        </form>
    );
}

