import React, { useState } from "react";
import Third from "./Third";

function Second(props){
        const [msg2,setMsg2]=useState("welcomee to third component using const")
    return(
        <React.Fragment>
            {/* <h5>{props.sub}</h5>
            <h5>{props.num}</h5>
            <h5>{JSON.stringify(props.flag)}</h5>
            <h5>{JSON.stringify(props.obj)}</h5>
            <h5>{JSON.stringify(props.products)}</h5> */}
            {/* //copy the above props */}
            <Third {...props}
                    msg={"welocme to thrid component"}
                    constmsg={msg2}> </Third>
        </React.Fragment>
    )
}
export default Second;  