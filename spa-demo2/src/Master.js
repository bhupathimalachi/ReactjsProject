import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import {BrowserRouter as Router, NavLink,Route} from "react-router-dom";

function Master(){

    return(
        <React.Fragment>
           <Router>
               <NavLink to="/Page_One" 
                        activeStyle={{color:"violet"}} 
                        exact={true} strict 
                        style={{marginRight:100}}>Page_One</NavLink>
               <NavLink to="/Page_Two" 
                        activeStyle={{color:"violet"}} 
                        exact={true} strict
                        style={{marginRight:100}}>Page_Two</NavLink>
               <NavLink to="/Page_Three" 
                        activeStyle={{color:"violet"}} 
                        exact={true} strict
                        style={{marginRight:100}}>Page_Three</NavLink>

               <br></br><br></br>

               <Route path="/Page_One" component={PageOne} exact={true} strict></Route>
               <Route path="/Page_Two" component={PageTwo} exact={true} strict></Route>
               <Route path="/Page_Three" component={PageThree} exact={true} strict></Route>
           </Router>

        </React.Fragment>
    )
}
export default Master;