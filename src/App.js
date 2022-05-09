import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Business Meeting',
      day: 'May 12th at 10:30AM',
      reminder: true
    },
    {
      id: 2,
      text: 'Food Shopping',
      day: 'May 14th at 5:00PM',
      reminder: false
    },
    {
      id: 3,
      text: 'Client Interview',
      day: 'June 2nd at 12:00PM',
      reminder: true
    }
  ])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() *10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  //Toggle Reminder
  const toggleRemnder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?{...task, reminder: !task.reminder} :task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemnder}/> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
