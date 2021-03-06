import { FaClock, FaCheckCircle } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggleReminder }) => {

    const taskStyleClass = task.reminder ? 'task reminder' : 'task';

    return (
        <div className={taskStyleClass} onDoubleClick={() => onToggleReminder(task.id)}>
            <h3>
                {task.text}
                <FaClock style={{ color: 'steelblue' }}
                    onClick={() => onToggleReminder(task.id)} />
                <FaCheckCircle style={{ color: 'red' }}
                    onClick={() => onDelete(task.id)}
                    onDoubleClick={() => onToggleReminder(task.id)} />
            </h3>
            <div>{task.day}</div>
        </div>
    )
}

export default Task