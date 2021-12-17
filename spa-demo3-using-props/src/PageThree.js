import React from "react";
import ChildThree from "./ChildThree";
import{BrowserRouter as Router,Route,NavLink}from "react-router-dom";
function PageThree(){

    return(
        <React.Fragment>
            <Router>
            <h1 style={{color:"green"}}>welcome Pagee ..........!!!!!!</h1>
            <NavLink to="/Child_Three" activeStyle={{color:"red"}} exact={true}strict>Child Three</NavLink>
            <br></br><br></br>
            <Route path="/Child_Three" component={ChildThree}  exact={true}strict></Route>
            </Router>
            
        </React.Fragment>
    )
}
export default PageThree;