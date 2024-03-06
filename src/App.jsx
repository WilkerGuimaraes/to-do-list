import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

import { Container } from "./App.style";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return { ...task, isCompleted: !task.isCompleted };

      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const handleTaskDeletion = (taskId) => {
    const removedTaks = tasks.filter((task) => task.id !== taskId);

    setTasks(removedTaks);
  };
  return (
    <Container>
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition} />

      <Tasks
        tasks={tasks}
        handleTaskDeletion={handleTaskDeletion}
        handleTaskClick={handleTaskClick}
      />
    </Container>
  );
}

export default App;
