import './App.css';

import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

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

  const [tasks, setTasks] = useState(initialTasks)

  const deleteTask = (id) => {
    // tasks.pop()
    console.log('BEFORE setTasks(): ', 'id to delete: ', id, '# of tasks: ', tasks.length)
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('AFTER setTasks(): ', 'id to delete: ', id, '# of tasks: ', tasks.length)
  }

  return (
    <div className="container">
      <Header qualifier="Awe" title="Task Tracker" />
      {/* <Header /> */}
      <Tasks tasks={tasks} onDeleteTask={deleteTask}/>
    </div>
  );
}

export default App;
