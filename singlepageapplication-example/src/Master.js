import React from "react";
import PageThree from "./PageThree";
import PageTwo from "./PageTwo";
import PageOne from "./PageOne";
import { BrowserRouter as Router, NavLink, Routes, Route  } from "react-router-dom";

function Master() {
    return (
        <React.Fragment>
            <Router>
                <NavLink to="/PageOne"
                    style={{ marginRight: 100 }}>PAGE_ONE</NavLink>
                <NavLink to="/PageTwo"
                    style={{ marginRight: 100 }}>PAGE_TWO</NavLink>
                <NavLink to="/PageThree"
                    style={{ marginRight: 100 }}>PAGE_THREE</NavLink>
                <br></br>
                <Routes>
                    <Route path="/PageOne" element={<PageOne />} exact={true} strict> </Route>
                    <Route path="/PageTwo" element={<PageTwo />} exact={true} strict></Route>
                    <Route path="/PageThree" element={<PageThree />} exact={true} strict> </Route>
                </Routes>
            </Router>
        </React.Fragment>
    )
};
export default Master;
