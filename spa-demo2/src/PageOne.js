import React from "react";
import ChildOne from "./ChildOne";
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";

function PageOne(){

    return(
        <React.Fragment>
            <Router>
                 <h1 style={{color:"red"}}>Welcome to Page one..............!!!!!!</h1>
                 <NavLink to="/Child_One" activeStyle={{color:"blue"}} exact={true} strict>Child-One</NavLink>
                <br></br><br></br>
                <Route path="/Child_One" component={ChildOne} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}
export default PageOne;