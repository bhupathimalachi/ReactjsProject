 import React, { Component } from "react";
import axios from "axios";

class GetExample extends Component{
    constructor(props){
        super(props);
        this.state={
            totalReactPackages:null
           
        };
    } 

    /* componentDidMount(){
        axios.get("https://api.npms.io/v2/search?q=react").then(response => 
             this.setState({ totalReactPackages: response.data.total 
            })  
        );
    }   */

    componentDidMount(){
        axios.get("https://api.npms.io/v2/search?q=react").then((posRes)=>{
            const{ total }=posRes;
            const{totalReactPackages}=total;
        },(errRes)=>{
            document.write(errRes)
        })
    };
    render(){
        const { totalReactPackages } = this.state;
        return(
            <React.Fragment>
                    <div className="card text-center m-3">
                        <h5 className="card-header">Simple GET Request</h5>
                        <div className="card-body">
                               Total react packages: {totalReactPackages}
                        </div>
                     </div>
            </React.Fragment>
            
        ) 
    }    
}
export default GetExample;