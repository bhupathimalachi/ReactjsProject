import React, { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const[myval,setMyvar]=useState(false);

  useEffect(() => { 
    console.log("use effect hook");
  }, [])

  useEffect(() => {
    // console.log("will execute every time");
    //console.log(count);
    if(count==10){
      setMyvar(true);
    }
  });

  useEffect(()=>{
    console.log("hello")
  },[myval]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <React.Fragment>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>click Me</button>

    </React.Fragment>
  )
};
export default App;