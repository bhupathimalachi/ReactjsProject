import React, { Component } from "react";
class Child extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={()=>{this.props.key1({"subone":"ReactJs","subtwo":"NodeJs","subthree":"MongoDB"})}}>
                    click me</button>
            </React.Fragment>
        )
    }
};
export default Child;
