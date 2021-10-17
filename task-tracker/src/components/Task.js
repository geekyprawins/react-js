import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onDTap }) {
  return (
    <div
      className={`task ${task.remainder === true ? "reminder" : ""} `}
      onDoubleClick={() => onDTap(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
