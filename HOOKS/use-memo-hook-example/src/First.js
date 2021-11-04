import React, { useEffect, useState } from "react";

import Second from "./Second";
function First(){

    const[num,setNum]=useState(0);

    useEffect(()=>{     
        setInterval(() => {
            setNum(num+1);
            
        }, 1000);
    },[num])
    return(
        <React.Fragment>
            <Second key1={num}></Second>
        </React.Fragment>
    )
}
export default First; 