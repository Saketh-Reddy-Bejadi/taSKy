/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";

const ForeGround = ({ toggle, change }) => {
  const [tasks, setTask] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  function handleValue(e) {
    setTaskValue(e.target.value);
  }

  const handleAddTask = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 100),
      name: taskValue,
    };
    setTask([...tasks, task]);
    setTaskValue("");
  };

  return (
    <>
      <div className="w-full h-screen fixed p-20 ">
        <div className="absolute top-10 right-5">
          <button
            onClick={() => {
              toggle(), console.log(change);
            }}
            className="text-5xl border-2 px-3 border-slate-900 rounded-full"
          >
            ~
          </button>
        </div>
        <div className="w-full h-24">
          <form onSubmit={handleAddTask}>
          <label htmlFor="taskInput">Task</label>
<input
  onChange={handleValue}
  className="appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  name=""
  id="taskInput"
  value={taskValue}
/>
          </form>
        </div>
      </div>
      <div className="flex">
        {tasks.map((d, i) => (
          <h1 className=" text-neutral-600 z-30" key={i}>
            {d.name}
          </h1>
        ))}
      </div>
    </>
  );
};

export default ForeGround;
