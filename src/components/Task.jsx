import { TaskContainer } from "./Task.style";

const Task = ({ task }) => {
  return (
    <TaskContainer>
      <div className="task-title">
        <p>{task.title}</p>
      </div>
    </TaskContainer>
  );
};

export default Task;
