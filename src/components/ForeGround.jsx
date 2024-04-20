/* eslint-disable react/prop-types */
import { useState } from "react";
import "../App.css";
import Card from "./Card";

const ForeGround = () => {
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
      <div className="w-full h-screen fixed p-14 ">
        {/* <div className="absolute top-10 right-5">
          <button
            onClick={() => {
              toggle(), console.log(change);
            }}
            className="text-5xl border-2 px-3 border-slate-900 rounded-full"
          >
            ~
          </button>
        </div> */}
        <div className="w-full h-2/6 relative">
          <form onSubmit={handleAddTask}>
            <div>
            {/* <label>Enter email</label> */}
              <input
                onChange={handleValue}
                className=" bg-transparent text-white outline-none absolute left-1/2 -translate-x-1/2 text-xl p-5 w-1/2 h-[50px] rounded-2xl"
                type="text"
                id="taskInput"
                value={taskValue}
                autoComplete="off"
                style={{ boxShadow: "1px 1px 10px   #632a7a" }}
              />
              
            </div>
          </form>
        </div>
      </div>
      <>
        {tasks.map((d, i) => (
          <Card key={i} d={d} />
        ))}
      </>
    </>
  );
};

export default ForeGround;
