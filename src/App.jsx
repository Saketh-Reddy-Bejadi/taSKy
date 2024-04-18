import { useState } from "react";
import BackGround from "./components/BackGround";
import ForeGround from "./components/ForeGround";

const App = () => {
  const [change, setChange] = useState(false);

  const toggle=()=>{
    setChange(!change);
    console.log(change);
  }


  return (
    <>
      <BackGround toggle={toggle} change={change} setChange={setChange} />
      <ForeGround toggle={toggle} change={change} setChange={setChange} />
    </>
  );
};

export default App;
