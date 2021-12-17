import logo from './logo.svg';
import './App.css';
import React, { Profiler } from 'react';
import Demo from './Demo';

function App() {
  const my_fun=(id,phase,startTime,totalTime)=>{
    console.log(id,phase,startTime,totalTime);
  }
  return (
    <React.Fragment>
      <Profiler id="my_demo" onRender={my_fun}>
        <Demo props1="Hello-1" props2="Hello_2" props3="Hello-3"></Demo>
      </Profiler>
    </React.Fragment>
  );
}

export default App;
