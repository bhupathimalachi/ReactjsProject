import React, { Component } from "react";
import axios from "axios";

class GetExampleForW3School extends Component{

    constructor(){
        super();
        this.state={
            records:{}

        }
    }
    componentWillUnmount(){

        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
            const{ data }=posRes;
            this.setState({
                records:data
            })

        },(errRes)=>{ 
            console.log(errRes)
        })
    }
    render(){
        return(<React.Fragment>
            {JSON.stringify(this.state.records)}
        </React.Fragment>)
    }


};
export default GetExampleForW3School;
