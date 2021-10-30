import React, { Component } from "react";

class Fourth extends Component{

    constructor(props){
        super(props);
    }
    render(){ 
        return(
            <React.Fragment>
                <h5>{this.props.sub}</h5>
                <h5>{this.props.num}</h5>
                <h5>{JSON.stringify(this.props.flag)}</h5>
                <h5>{JSON.stringify(this.props.obj)}</h5>
                <h5>{JSON.stringify(this.props.products)}</h5>
                <h5>{this.props.msg}</h5>
                <h5>{this.props.msg1}</h5>
                <h5>{this.props.constmsg}</h5>

            </React.Fragment>
        )
    }

}
export default Fourth;