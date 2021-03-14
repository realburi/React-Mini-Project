import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useEffect, useState} from 'react'


function App() {
    const [showAddTask, setAddTask] = useState(false)
    const [tasks, setTasks] = useState([]
    )

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer)
        }
        getTasks();
    }, [])

    // Fetch tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        return await res.json()
    }

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000 + 1)
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
        console.log('delete', id)
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        console.log("Toggling " + id)
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
    }

    // add button to toggle form

    return (
      <div className="App">
          <Header onAdd={() => setAddTask(!showAddTask)} showAdd={showAddTask}/>
          {showAddTask && <AddTask onAdd={addTask}/>}
          {tasks.length !== 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks to show" }
      </div>
    );
}


export default App;