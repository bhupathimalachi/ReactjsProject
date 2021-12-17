import React from "react";
import ChildOne from "./ChildOne";
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";

function PageOne(props){

    return(
        <React.Fragment>
            <Router>
                 <h1 style={{color:"red"}}>{props.match.params.msg}</h1>
                 <NavLink to="/Child_One/welcome to props" activeStyle={{color:"blue"}} exact={true} strict>Child-One</NavLink>
                <br></br><br></br>
                <Route path="/Child_One/:msg" component={ChildOne} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}
export default PageOne;