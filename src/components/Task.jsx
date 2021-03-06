import { FaTimesCircle } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>
                {task.text}
                <FaTimesCircle style={{ color: 'red' }} 
                    onClick={() => onDelete(task.id)}/>
            </h3>
            <div>{task.day}</div>
        </div>
    )
}

export default Task