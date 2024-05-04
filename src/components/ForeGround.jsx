import { useState } from "react";

const ForeGround = () => {
  // const [task, setTask] = useState("");
  const [taskName, setTaskName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const t = {
      id: Math.floor(Math.random() * 10),
      name: taskName,
      des: desc,
    };
    // if (t.name === "" || t.des === "") {
    //   alert("Task Name or Description cannot be empty...");
    // } else {
    //   setTask([...t, task]);
    // }
    console.log(t.name);
  };

  return (
    <div className="bg-black w-dvw h-dvh pt-20 justify-center">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          value={taskName}
          autoCapitalize="sentences"
        />
        <br />
        <input
          className="mt-10"
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          value={desc}
        />
      </form>
    </div>
  );
};

export default ForeGround;
