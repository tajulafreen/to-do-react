import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    "eat breakfast",
    "walk for 20 minutes",
    "take a shower",
  ]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1); // State to track the task being edited
  const [editedTask, setEditedTask] = useState(""); // State for the edited task

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "" && newTask.length > 5) {
      setNewTask("");
      setTasks((t) => [...t, newTask]);
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const updateTask = () => {
    if (editedTask.trim() !== "" && editedTask.length > 5 && editIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = editedTask;
      setTasks(updatedTasks);
      setEditedTask("");
      setEditIndex(-1);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((e, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index - 1];
      updatedTasks[index - 1] = temp;
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      const temp = updatedTasks[index];
      updatedTasks[index] = updatedTasks[index + 1];
      updatedTasks[index + 1] = temp;
      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div className="">
        <div className="">
          <h1 className="text-3xl relative font-bold">To Do List</h1>
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
                <button
                  className="down-btn"
                  onClick={() => moveTaskDown(index)}
                >
                  ⬇️
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
