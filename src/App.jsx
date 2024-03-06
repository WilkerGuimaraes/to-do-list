import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "./components/Header";
import AddTask from "./components/AddTask";

import { Container } from "./App.style";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);

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
  return (
    <Container>
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition} />

      <Tasks tasks={tasks} />
    </Container>
  );
}

export default App;
