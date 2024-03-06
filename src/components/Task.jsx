import { CgInfo, CgClose } from "react-icons/cg";

import { TaskContainer } from "./Task.style";

const Task = ({ task }) => {
  return (
    <TaskContainer>
      <div className="task-title">
        <p>{task.title}</p>
      </div>

      <div className="buttons-container">
        <button className="see-task-details-button">
          <CgInfo className="icon" />
        </button>

        <button className="remove-task-button">
          <CgClose className="icon" />
        </button>
      </div>
    </TaskContainer>
  );
};

export default Task;
