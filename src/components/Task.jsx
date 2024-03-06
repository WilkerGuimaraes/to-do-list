import { CgInfo, CgClose } from "react-icons/cg";

import { TaskContainer } from "./Task.style";

const Task = ({ task, handleTaskDeletion, handleTaskClick }) => {
  return (
    <TaskContainer
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        <p>{task.title}</p>
      </div>

      <div className="buttons-container">
        <button className="see-task-details-button">
          <CgInfo className="icon" />
        </button>

        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose className="icon" />
        </button>
      </div>
    </TaskContainer>
  );
};

export default Task;
