import './App.css';
import React, { useRef,useState } from "react";

function App() {
  
  const uemail= useRef();
  const upassword = useRef();

  const [status,setStatus] = useState("");

  const login=()=>{

    if(uemail.current.value === "bhupathim2018@gmail.com" && upassword.current.value === "malachi"){
        setStatus("you haved login in bhupathim2018@gmail.com");
    }
    else{
      setStatus("login failed....... please try again"); 
    }
  };
  return (
    <React.Fragment>
      <input type = "email" ref = {uemail}></input>
      <br></br> <br></br>
      <input type = "password" ref = {upassword}></input>
      <br></br><br></br>
      <button onClick={login}>LOGIN</button>
       <br></br>
      <h1>{status}</h1>
    </React.Fragment> 
  );
}
export default App;
