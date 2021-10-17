import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Task1",
      day: "Feb 27th at 6pm",
      remainder: true,
    },
    {
      id: 2,
      text: "Task2",
      day: "Mar 27th at 6pm",
      remainder: true,
    },
    {
      id: 3,
      text: "Task3",
      day: "April 27th at 6pm",
      remainder: false,
    },
  ]);
  // Delete task

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  // Toggle remainder
  const toggleRem = (id) => {
    setTask(
      tasks.map((t) => {
        if (t.id === id) {
          t.remainder = !t.remainder;
        }
        return t;
      })
    );
  };

  return (
    <div className="container">
      <Header title="React" />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onDTap={toggleRem} />
      ) : (
        "No tasks!"
      )}
    </div>
  );
}

export default App;
