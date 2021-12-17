import React, { Children } from "react";

function ChildOne(props){

    return(
        <React.Fragment>
            <h1 style={{color:"tomato"}}>{props.match.params.msg}</h1>
        </React.Fragment>
    )
}
export default ChildOne;