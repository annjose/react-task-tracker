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

  return (
    <div className="container">
      <Header qualifier="Awe" title="Task Tracker" />
      {/* <Header /> */}
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
