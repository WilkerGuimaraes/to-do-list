import Task from "./Task";

const Tasks = ({ tasks, handleTaskDeletion, handleTaskClick }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskDeletion={handleTaskDeletion}
          handleTaskClick={handleTaskClick}
        />
      ))}
    </>
  );
};

export default Tasks;
