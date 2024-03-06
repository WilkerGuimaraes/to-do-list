import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import AddTask from "./components/AddTask";

import { Container } from "./App.style";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

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
