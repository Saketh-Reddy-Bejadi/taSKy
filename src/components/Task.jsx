/* eslint-disable react/prop-types */

const Task = ({ content,...props }) => {
  return (
    <div
      id="task"
      style={{
      }}
      className="bg-neutral-800 text-white text-lg w-[300px] select-none cursor-move p-[10px] border-black border"
      {...props}
    >
      📌{content}
    </div>
  );
};

export default Task;
