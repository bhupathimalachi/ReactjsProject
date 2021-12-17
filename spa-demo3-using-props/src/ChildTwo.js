import React, { Children } from "react";

function ChildTwo(props){

    return(
        <React.Fragment>
            <h1 style={{color:"tomato"}}>{props.match.params.wish}</h1>
        </React.Fragment>
    )
}
export default ChildTwo;