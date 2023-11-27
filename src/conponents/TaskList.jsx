import PropTypes from 'prop-types';

TasksList.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default function TasksList({tasks}) {

    const handleDelete = (id) => {console.log('se borrara!', id)};

    return (
        <table>
            <caption>Lista de las tareas creadas:</caption>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Descripción</th>
                    <th>Estado</th>
                    <th>Funciones</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.description}</td>
                        <td>{task.isCompleted ? "Completado" : "Pendiente"}</td>
                        <td>
                            <button onClick={() => handleDelete(task.id)}>Borrar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}