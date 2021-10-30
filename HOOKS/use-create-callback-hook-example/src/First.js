import React, { useCallback, useState } from "react";
import Second from "./Second";

function First(){
    const[num,setNum]=useState(0);
    const funone=useCallback(()=>{
        setNum(num=>num+1);

    },[setNum])
    return(
        <React.Fragment>
            <Second fun_one={funone}></Second>
            <h1>{num}</h1>
        </React.Fragment>
    )

}
export default First;
