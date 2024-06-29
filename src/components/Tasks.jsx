/* eslint-disable react/prop-types */
import Task from "./Task";

const Tasks = ({ data, setData }) => {
  return (
    <div>
      {data.map((note) => {
        return <Task key={note.id} content={note.content} />;
      })}
    </div>
  );
};

export default Tasks;
