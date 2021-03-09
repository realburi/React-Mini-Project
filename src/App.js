import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([
            {
                id: 1,
                text: "Food Shopping",
                day: "Feb 6th at 1:30pm",
                reminder: true
            },
            {
                id: 2,
                text: "Yoga",
                day: "Feb 5th at 2:30pm",
                reminder: true
            },
            {
                id: 3,
                text: "Swimming",
                day: "Feb 7th at 12:30pm",
                reminder: false
            }
        ]
    )


    // Delete Task

    const deleteTask = (id) => {
        console.log('delete', id)
    }
    return (
      <div className="App">
          <Header />
          <Tasks tasks={tasks} onDelete={deleteTask} />
      </div>
    );
}


export default App;