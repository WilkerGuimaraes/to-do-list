import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";

import { TaskDetailsContainer } from "./TasksDetails.style";

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <TaskDetailsContainer>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Back</Button>
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
