const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <p>{task.title}</p>
      ))}
    </>
  );
};

export default Tasks;
