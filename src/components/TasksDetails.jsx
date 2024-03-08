import { useParams } from "react-router-dom";

import Button from "./Button";

import { TaskDetailsContainer } from "./TasksDetails.style";

const TaskDetails = () => {
  const params = useParams();

  return (
    <TaskDetailsContainer>
      <div className="back-button-container">
        <Button>Back</Button>
      </div>

      <div className="task-details-content">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro minus
          dolorum ipsum sapiente excepturi laudantium eligendi alias.
          Architecto, eos eaque.
        </p>
      </div>
    </TaskDetailsContainer>
  );
};

export default TaskDetails;
