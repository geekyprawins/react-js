import Task from "./Task";

function Tasks({ tasks, onDelete , onDTap}) {
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onDTap={onDTap}/>
      ))}
    </>
  );
}

export default Tasks;
