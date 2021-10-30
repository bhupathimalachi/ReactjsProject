import React, { Component } from "react";
import axios from "../../../async-call-example/node_modules/axios";

class GetExampleForW3School2 extends Component{

    constructor(){
        super();
        this.state={
            //records:{}
            records:[]
        }
    };
    componentDidMount(){

        /* axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
            const{ data }=posRes;
            const{records}=data;
            this.setState({
                records:records
            })

        },(errRes)=>{ 
            console.log(errRes)
        }) */

        fetch("https://www.w3schools.com/angular/customers.php").then(res=>res.json()).then(posRes=>{
            //console.log(posRes);
            const{records}=posRes;
            this.setState({
                records:records
            })
        })
    }
    render(){
        return(<React.Fragment>
            {/* {JSON.stringify(this.state.records)} */}

            <table border="1"
                    cellPadding="10"
                    cellSpacing="10">
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                        {this.state.records.map((element,index)=>(
                            <tr key={index}>
                                <td> {element.Name}</td>
                                <td> {element.City}</td>
                                <td>{element.Country}</td>
                            </tr>
                        ))}

            </table>
        </React.Fragment>
        )
    }
};
export default GetExampleForW3School2;