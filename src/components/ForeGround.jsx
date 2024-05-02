import { useState } from "react";

const ForeGround = () => {
  const [task, setTask] = useState("");
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 10),
      name: taskName,
    };
  };

  return (
    <div className="bg-black w-dvw h-dvh flex pt-20 justify-center">
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          value={taskName}
        />
      </form>
    </div>
  );
};

export default ForeGround;
