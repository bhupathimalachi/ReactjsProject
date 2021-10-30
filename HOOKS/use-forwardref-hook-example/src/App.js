import React, { useEffect, useRef } from 'react';
import Input from "./Components/Input";

function App() {
  const uname = useRef();
  const upwd = useRef();
  const uemailRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    uname.current.focus();
  }, []);

  function unameFn(e) {
    if (e.key === "Enter") {
      upwd.current.focus();

    }
  }

  function upwdFn(e) {
    if (e.key === "Enter") {
      uemailRef.current.focus();
    }
  }

  function uemailFn(e) {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  }

  function submitFn(e) {
    console.log("welcome to my forwarde ref hook")
    console.log(uname.current.value,
      upwd.current.value,
      uemailRef.current.value )
  }


  return (
    <React.Fragment>
      <div>
        <label>User Name</label> <br></br>
        <Input type="text"
          placeholder="Enter User Name"
          onKeyDown={unameFn}
          ref={uname}></Input>
      </div>
      <br></br>

      <div>
        <label>password</label><br></br>
        <Input type="Password"
          placeholder="Enter User Password"
          onKeyDown={upwdFn}
          ref={upwd}></Input>
      </div>

      <br></br>
      <div>
        <label>enter E-Mail</label><br></br>
        <Input type="email"
          palceholder="Enter E-Mail"
          onKeyDown={uemailFn}
          ref={uemailRef}></Input>
      </div>
      <br></br>
      <div>
        <Input type="submit"
          placeholder=""
          onKeyDown={submitFn}
          ref={submitRef}></Input>
      </div>
    </React.Fragment>
  )

}

export default App;
