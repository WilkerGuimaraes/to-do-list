import { useState } from "react";

import Button from "./Button";

import {
  AddTaskButtonContainer,
  AddTaskContainer,
  AddTaskInput,
} from "./AddTask.style";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  const handleKeyboardEvent = (event) => {
    if ((event.key === "Enter") & (event.ctrlKey || event.metaKey)) {
      handleAddTaskClick();
    }
  };

  return (
    <AddTaskContainer>
      <AddTaskInput
        required
        type="text"
        value={inputData}
        onChange={handleInputChange}
        onKeyDown={handleKeyboardEvent}
      />

      <AddTaskButtonContainer>
        <Button onClick={handleAddTaskClick}>Add</Button>
      </AddTaskButtonContainer>
    </AddTaskContainer>
  );
};

export default AddTask;
