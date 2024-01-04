import React from "react";

const TaskItem = ({
  task,
  index,
  editTask,
  deleteTask,
  moveTaskUp,
  moveTaskDown,
  editIndex,
  editedTask,
  setEditedTask,
  updateTask,
}) => {
  return (
    <li key={index}>
      <button onClick={() => editTask(index)}>✒️</button>
      {editIndex === index ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button className="add-btn" onClick={updateTask}>
            Update
          </button>
        </>
      ) : (
        <span className="text">{task}</span>
      )}
      <button className="dlt-btn" onClick={() => deleteTask(index)}>
        Delete
      </button>
      <button className="up-btn" onClick={() => moveTaskUp(index)}>
        ⬆️
      </button>
      <button className="down-btn" onClick={() => moveTaskDown(index)}>
        ⬇️
      </button>
    </li>
  );
};

export default TaskItem;
