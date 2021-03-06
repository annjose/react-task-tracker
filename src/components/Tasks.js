import Task from './Task';
import { FaCheckCircle } from 'react-icons/fa';

const Tasks = ({ tasks, onDeleteTask, onToggleReminder }) => {

    const zeroTasksView = <div className='tasks-empty'>
        <FaCheckCircle style={{ color: 'green'}}/>
        <span>Yay! All tasks done!</span>
        </div>

    const validTasksView = tasks.map((task) => (
        <Task key={task.id} task={task} 
              onDelete={onDeleteTask} 
              onToggleReminder={onToggleReminder}></Task>
    ))

    return (
        <div>{tasks.length === 0 ? zeroTasksView : validTasksView}</div>
    )
}

export default Tasks