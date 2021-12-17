import React from "react";
import ChildTwo from "./ChildTwo";
import {BrowserRouter as Router,NavLink,Route} from "react-router-dom";
function PageTwo(props){
    return(
        <React.Fragment>
            <Router>
            <h1 style={{color:"blue"}}>{props.match.params.msg1}.....{props.match.params.msg2}</h1>
            <NavLink to="/Child_Two/welcome" activeStyle={{color:"green"}} exact={true} strict>Child-two</NavLink>
            <br></br><br></br>
            <Route path="/Child_Two/:wish" component={ChildTwo} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}
export default PageTwo;