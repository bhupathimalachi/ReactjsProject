import React, { Component } from "react";
import Fourth from "./Fourth";

class Third extends Component{
    
    constructor(){
        super();
        this.state={ 
            num:0
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                num:0
            })
        }, 1000);
    }
    render(){
        return(
            <React.Fragment>

                <Fourth key1={this.state.num}></Fourth>
            </React.Fragment>
        )
    }
}
export default Third;