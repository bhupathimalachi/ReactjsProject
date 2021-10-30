import React from "react";
import Fourth from "./Fourth";
function Third(props){

    return(
        <React.Fragment>
            {/* <h5>{props.sub}</h5>
            <h5>{props.num}</h5>
            <h5>{JSON.stringify(props.flag)}</h5>
            <h5>{JSON.stringify(props.obj)}</h5>
            <h5>{JSON.stringify(props.products)}</h5>
            <h5>{props.msg}</h5> 
            <h5>{props.constmsg}</h5>*/}
           <Fourth {...props}
                    msg1={"welcome to fourth component "}></Fourth>
        </React.Fragment>
    )

}
export default Third;