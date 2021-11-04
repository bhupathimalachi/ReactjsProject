import React from "react";
import {useStateWithCallbackLazy} from "use-state-with-callback";
function App(){
    const[count,setCount]=useStateWithCallbackLazy(0);
    const handlClick= ()=>{
        setCount(count+1,(latestCount)=>{
            // console.log("hello",latestCount);
            if(latestCount<20){
                console.log("thresold value is not reached");
            }
            else{
                console.log("thresold value is reacherd");
            }

        }); 
    };
    return(
        <React.Fragment>
            <h1>Count.{count}</h1>
            <button onClick={handlClick}>click here</button>
        </React.Fragment>
    )

}
export default App;
