import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import{BrowserRouter as Router, NavLink,Route} from "react-router-dom";

function Master(){
    return(
        <React.Fragment>
            <Router>
                <NavLink to="/page_one" activeStyle={{color:"black"}}strict style={{marginRight:100}}>Page_One</NavLink>
                <NavLink to="/page_two" activeStyle={{color:"greenyellow"}}strict style={{marginRight:100}}>Page_Two</NavLink>
                <NavLink to="/page_three" activeStyle={{color:"blue"}}strict style={{marginRight:100}}>Page_Three</NavLink>
            
            <br></br><br></br>
                <Route path="/page_one" component={PageOne} exact={true} strict></Route>
                <Route path="/page_two" component={PageTwo} exact={true} strict></Route>
                <Route path="/page_three" component={PageThree} exact={true} strict></Route>
            </Router>
        </React.Fragment>
    )
}
export default Master;