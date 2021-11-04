import React, { useEffect, useState } from "react";

let born = false;
function App() {

  const [age, setAge] = useState(0);
  const [retirement, setRetirement] = useState(false);

  useEffect(() => {
    //console.log("welcome to use effect hook with empty dependency");
    console.log("IAM BORN")
  }, []);

  useEffect(() => {
    //console.log("wlocome to use effect hook for to print mulitiples time")
    if (born) {
      console.log("I AM GROWING")
    } else {
      born = true;
    }
  });  

  useEffect(() => {
    console.log("iam retired from my job")
  }, [retirement]);

  const ageup = () => {
    setAge(age + 10)
  };
  
  useEffect(() => {
    if (age >= 70) {
      setRetirement(true);
    } else {
      console.log("I AM GROWING")
    }
  });

  return (
    <React.Fragment>
      <h1>age:{age}</h1>
      <button onClick={ageup}>age up</button>
    </React.Fragment>
  )
}
export default App;
