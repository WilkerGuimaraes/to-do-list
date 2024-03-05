import Header from "./components/Header";

import { Container } from "./App.style";
import AddTask from "./components/AddTask";

function App() {
  return (
    <Container>
      <Header />
      <AddTask />
    </Container>
  );
}

export default App;
