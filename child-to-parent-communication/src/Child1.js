import React from "react";

function Child1(props) {
    return (
        <React.Fragment>
            <button onClick={() => props.fun_one({ "key1": "hello1" })}>
                single click
            </button>
            <button onDoubleClick={() => props.fun_two({ "key1": "hello1" })}>
                double click
            </button>


        </React.Fragment>
    )

};
export default Child1;