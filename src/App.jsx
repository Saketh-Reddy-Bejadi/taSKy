import { useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";

const App = () => {

  const [data,setData]=useState([
    {id: 1, content:"lorem ipsum dolor sit amet, consectetur adip"},
    {id: 2, content:"ipsum dolor sit amet, consectetur adip ex ea commodo"},
  ])

  return <div>
    <Tasks data={data} setData={setData} />
  </div>;
};

export default App;
