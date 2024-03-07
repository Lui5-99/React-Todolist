import DragandDrop from "./Components/DragandDrop";
import "./App.css";
import Form from "./Components/Form";
import { useEffect, useState } from "react";

const _tasks = [
  {
    id: 1,
    title: "Tarea 1",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    list: 1,
  },
  {
    id: 2,
    title: "Tarea 2",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    list: 1,
  },
  {
    id: 3,
    title: "Tarea 3",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    list: 2,
  },
  {
    id: 4,
    title: "Tarea 4",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    list: 3,
  },
  {
    id: 5,
    title: "Tarea 5",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
    list: 3,
  },
];

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    if (tasks?.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.removeItem("tasks");
    }
  }, [tasks]);

  const addTask = (data) => {
    const newTask = [...tasks, data];
    setTasks(newTask);
  };

  const getTasks = async () => {
    try {
      const _tasks = localStorage.getItem("tasks");
      if (_tasks) {
        setTasks(JSON.parse(_tasks));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form addTask={addTask} />
      <DragandDrop tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
