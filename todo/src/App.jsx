import "./App.css";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import { useState } from "react";
import Task from "./components/Task";
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskTitle, taskContent) => {
    const newTask = {
      taskTitle: taskTitle,
      taskContent: taskContent,
    };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    const afterDeletingTasks = tasks.filter((taskItem, index) => {
      return index !== id;
    });
    setTasks(afterDeletingTasks);
  };

  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />

      <div className="container">
        <div className="row my-5 ">
          {tasks.map((taskItem, index) => {
            return (
              <Task
                key={index}
                id={index}
                title={taskItem.taskTitle}
                content={taskItem.taskContent}
                onDelete={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
