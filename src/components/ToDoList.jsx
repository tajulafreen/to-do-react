import React, { useState } from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import "./styles/TodoList.css";
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
      <div className=" w-[90%] m-auto  ">
        <h1 className="text-4xl  relative font-bold my-[30px] text-slate-200">
          To Do List
        </h1>
        <AddTask
          addTask={addTask}
          newTask={newTask}
          handleInputChange={handleInputChange}
        />
        <ol className="my-[7%] flex flex-col gap-4 h-[45vh] overflow-auto scrollbar ">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              editTask={editTask}
              deleteTask={deleteTask}
              moveTaskUp={moveTaskUp}
              moveTaskDown={moveTaskDown}
              editIndex={editIndex}
              editedTask={editedTask}
              setEditedTask={setEditedTask}
              updateTask={updateTask}
            />
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
