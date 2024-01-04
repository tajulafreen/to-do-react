import React from "react";

const AddTask = ({ addTask, newTask, handleInputChange }) => {
  return (
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
  );
};

export default AddTask;
