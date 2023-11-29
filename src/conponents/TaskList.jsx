// React icons
import { IoTrashBin } from "react-icons/io5";
import { TbProgressBolt } from "react-icons/tb";
import { FcApproval } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";

import PropTypes from 'prop-types';

TasksList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
    onChangeStatus: PropTypes.func.isRequired,
};

export default function TasksList({tasks, onDeleteTask, onEditTask, onChangeStatus}) {

    return (
        <table>
            <caption>Lista de las tareas creadas:</caption>
            <thead>
                <tr>
                    <th>N⁰</th>
                    <th>Hora</th>
                    <th>Estado</th>
                    <th>Descripción</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, indice) => (
                    <tr key={task.id}>
                        <td>{indice+1}</td>
                        <td>{task.hours}</td>
                        <td>
                            {task.isCompleted 
                                ? <FcApproval className='icon' onClick={() => onChangeStatus(task.id)}/> 
                                : <TbProgressBolt onClick={() => onChangeStatus(task.id)} className='icon' color="#C58C08" />
                            }
                        </td>
                        <td>{task.description}</td>
                        <td>
                            <IoTrashBin onClick={() => onDeleteTask(task.id)} className='icon' color="#EB3D25"/>
                            <CiEdit onClick={() => onEditTask(task.description)} className='icon' />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}