import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import { BrowserRouter as Router, NavLink, Routes } from "react-router-dom";

function Master() {
    return (
        <React.Fragment>
            <Router>

                <NavLink to="/PageOne"
                    activeStyle={{ color: "red" }}
                    exact={true} strict
                    style={{ marginRight: 100 }}>PAGE_ONE</NavLink>
                <NavLink to="/PageTwo"
                    activeStyle={{ color: "red" }}
                    exact={true} strict
                    style={{ marginRight: 100 }}>PAGE_TWO</NavLink>
                <NavLink to="/PageThree"
                    activeStyle={{ color: "red" }}
                    exact={true} strict
                    style={{ marginRight: 100 }}>PAGE_THREE</NavLink>
                <br></br>
                <Routes path="/PageOne" component={PageOne} exact={true} strict></Routes>
                <Routes path="/PageTwo" component={PageTwo} exact={true} strict></Routes>
                <Routes  path="/PageThree" component={PageThree} exact={true} strict></Routes>
            </Router>


        </React.Fragment>
    )

}
export default Master;
