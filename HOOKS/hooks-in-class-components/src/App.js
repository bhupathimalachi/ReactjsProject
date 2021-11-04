import React, { Component } from "react";
import Child from "./Child";

class App extends Component {

  state = {
    name: "bhupathi"
  }
  constructor() {
    //constructor will execute at booting time
    //construcotr will execute only once
    //we can set the state here
    super();
    console.log("parent constructor");
    this.state = {
      name: "bhupathi malachi"
    }
  }

  //after constructor componentWillMount execute
  //change the state before renedering
  //set the golobal parameters like width,height .... 
  componentWillMount() {
    console.log("componentWillMount")
    if (window.innerWidth < 1000) {
      this.setState({
        innerWith: window.innerWidth
      })
    }
  }
  handleChange = () => {
    this.setState({
      name: "JEWSWICA COMPUTER EDUCATION & SOFTWARE SOLUTION"
    })
  }

  //render will execute after the componentWillMount execute
  //keep presentation logic
  // if change detected in state or props it will re render once again
  //mandatory hook
  //never set the state here(leads to infinate loop)
  render() {
    console.log("parent render");
    return (
      <React.Fragment>
        <h1>{this.state.name}</h1>
        <h1>{this.state.innerWith}</h1>
        <Child name={this.state.name}></Child>
        <button onClick={this.handleChange}>change</button>
      </React.Fragment>
    )
  }

  //if component sucessfully rendered,then only this hook is execute
  //used to handle the side effects(rest apis calls)
  //set the state based on side effects
  componentDidMount() {
    console.log("parent componentDidMount")
  }
  //componet  will receive the pro
  componentWillReceiveProps(){
    console.log("parent componentWillReceiveProps");
  }

  //giving  a permission to update the data
  shouldComponentUpdate(){
    return true;
}

componentDidUpdate(){
  // is is simillar to  componentWillMount but opposite also
}

componentWillUpdate(){

}

componentWillUnmount(){
    
}

};
export default App;
