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
    <li
      key={index}
      className=" bg-transparent backdrop-blur  border-b-2 border-r-2 border-gray-300 m-[3%] h-[50px] flex flex-row justify-between rounded-xl gap-[5px]"
    >
      <button
        onClick={() => editTask(index)}
        className="w-9 bg-slate-100 h-8 rounded-xl hover:bg-inherit my-auto"
      >
        ✒️
      </button>
      {editIndex === index ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="bg-transparent p-1  w-[50%] text-gray-200 text-[16px] md:text-[20px]"
          />
          <button
            className="text-gray-200 bg-blue-600 rounded-lg h-8 my-auto p-1 hover:bg-blue-900 active:bg-inherit w-[15%] text-[10px] md:text-[16px]"
            onClick={updateTask}
          >
            Update
          </button>
        </>
      ) : (
        <span className="bg-transparent p-1  w-[60%] text-gray-200 md:text-[22px] ">
          {task}
        </span>
      )}
      <button
        className="text-gray-200 bg-red-600 h-8 my-auto rounded-lg p-1 hover:bg-red-700 w-[15%] text-[10px] md:text-[16px]"
        onClick={() => deleteTask(index)}
      >
        Delete
      </button>
      <button
        className=" bg-slate-100 rounded-xl h-8 my-auto w-[10%]"
        onClick={() => moveTaskUp(index)}
      >
        ⬆️
      </button>
      <button
        className="w-[10%] bg-slate-100 rounded-xl h-8 my-auto"
        onClick={() => moveTaskDown(index)}
      >
        ⬇️
      </button>
    </li>
  );
};

export default TaskItem;
