import { useState } from "react";

import Header from "./components/Header";
import AddTask from "./components/AddTask";

import { Container } from "./App.style";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: crypto.randomUUID(),
      title: "Learning programming",
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      title: "Go to the gym",
      isCompleted: true,
    },
  ]);
  return (
    <Container>
      <Header />
      <AddTask />

      <Tasks tasks={tasks} />
    </Container>
  );
}

export default App;
