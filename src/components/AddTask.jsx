import React from "react";

const AddTask = ({ addTask, newTask, handleInputChange }) => {
  return (
    <div className="flex flex-row justify-around gap-2">
      <input
        type="text"
        placeholder="Enter to do..."
        value={newTask}
        onChange={handleInputChange}
        className="w-[80%] p-3 rounded-lg text-[16px]"
      />
      <button
        className="bg-green-500 w-[80px] rounded-lg p-2 text-gray-200 text-[20px] hover:bg-green-600"
        onClick={addTask}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
