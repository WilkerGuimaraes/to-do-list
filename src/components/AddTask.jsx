import { AddTaskContainer, AddTaskInput } from "./AddTask.style";

import Button from "./Button";

const AddTask = () => {
  return (
    <AddTaskContainer>
      <AddTaskInput type="text" />
      <Button>Add</Button>
    </AddTaskContainer>
  );
};

export default AddTask;
