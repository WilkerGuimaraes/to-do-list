import {
  AddTaskButtonContainer,
  AddTaskContainer,
  AddTaskInput,
} from "./AddTask.style";

import Button from "./Button";

const AddTask = () => {
  return (
    <AddTaskContainer>
      <AddTaskInput type="text" />

      <AddTaskButtonContainer>
        <Button>Add</Button>
      </AddTaskButtonContainer>
    </AddTaskContainer>
  );
};

export default AddTask;
