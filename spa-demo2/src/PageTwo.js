import React from "react";
import ChildTwo from "./ChildTwo";
import {BrowserRouter as Router,NavLink,Route} from "react-router-dom";
function PageTwo(){
    return(
        <React.Fragment>
            <Router>
            <h1 style={{color:"blue"}}>welcome to page two ....... !!!</h1>
            <NavLink to="/Child_Two" activeStyle={{color:"green"}} exact={true} strict>Child-two</NavLink>
            <br></br><br></br>
            <Route path="/Child_Two" component={ChildTwo} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}
export default PageTwo;