import React, { Component, PureComponent } from "react";
import reactRouterDom from "react-router-dom";
import Second from "./Second";

class First extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({num:this.state.num+1
             })
        },1000);
    }
    render() {
        return (
            <React.Fragment>
                <Second key1={this.state.num}></Second>
            </React.Fragment>
        )
    }
};
export default First;