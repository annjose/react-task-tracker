import './App.css';

import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

// global state for the app
const initialTasks = [
  {
    "id": 1,
    "text": "Doctors Appointment",
    "day": "Feb 5th at 2:30pm",
    "reminder": true
  },
  {
    "id": 2,
    "text": "Meeting at School",
    "day": "Feb 6th at 1:30pm",
    "reminder": true
  },
  {
    "id": 3,
    "text": "Business Meeting",
    "day": "Feb 8th at 8:30am",
    "reminder": false
  }
]

// This method is called in every render cycle
function App() {
  
  const [tasks, setTasks] = useState(initialTasks);

  const resetTasks = () => {
    console.log('resetTasks:initialTasks= ', initialTasks);
    setTasks(initialTasks)
  }

  const addTask = () => {
    console.log('adding task');
   
  }
  const deleteTask = (taskId) => {
    // tasks.pop()
    console.log('BEFORE setTasks(): ', 'id to delete: ', taskId, '# of tasks: ', tasks.length)
    setTasks(tasks.filter((task) => task.id !== taskId))
    console.log('AFTER setTasks(): ', 'id to delete: ', taskId, '# of tasks: ', tasks.length)
    console.log('initialTasks= ', initialTasks);
  }

  const toggleReminder = (taskIdToToggle) => {

    const newTasks = tasks.map( (task) => {
      return task.id === taskIdToToggle ? { ...task, reminder: !task.reminder}: task
    });

    // const newTasks = [];
    // tasks.forEach((task) => {
    //   const newTask = {...task}
    //   if (newTask.id === taskIdToToggle) {
    //     newTask.reminder = !newTask.reminder;
    //   }
    //   newTasks.push(newTask);
    // });
    console.log('toggleReminder: newTasks=', newTasks);
    console.log('toggleReminder: initialTasks=', initialTasks);

    setTasks(newTasks)
  }

  return (
    <div className="container">
      <Header qualifier="Awe" title="Task Tracker"
        onAddTask={addTask} onResetTasks={resetTasks} />
      {/* <Header /> */}
      <Tasks tasks={tasks} onDeleteTask={deleteTask} onToggleReminder={toggleReminder} />
    </div>
  );
}

export default App;
