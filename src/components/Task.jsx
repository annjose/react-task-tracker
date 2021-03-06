import { FaTimes, FaTimesCircle } from 'react-icons/fa';

const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>
                {task.text}
                <FaTimesCircle style={{ color: 'red' }} />
            </h3>
            <div>{task.day}</div>
        </div>
    )
}

export default Task