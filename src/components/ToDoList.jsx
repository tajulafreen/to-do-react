import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "walk for 20 minutes",
    "take a shower",
  ]);
  const [newTask, setNewTask] = useState("");
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addTask = () => {};
  const deleteTask = (index) => {};
  const moveTaskUp = (index) => {};
  const moveTaskDown = (index) => {};
  return (
    <>
      <div className="to-do-list">
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter to do..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-btn" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
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
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
