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
            <label htmlFor="description"> * Escribir tarea nueva: </label>
            <input type="text" name="description" id="description" placeholder="Ej: Ir al GIM a las 7pm..." title="input" aria-label="Escribir tarea nueva" required/>
            <input type="submit" value="Crear" />
        </form>
    );
}

