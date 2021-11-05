import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route, Switch } from "react-router-dom";
import ChildTwo from "./ChildTwo";
function PageTwo() {
    return (
        <React.Fragment>
           
                <h1 style={{ color: "green" }}>PAGE TWO !!!! </h1>
                <NavLink to="/child_two" activeStyle={{ color: "red" }} exact={true} strict>Child_Two</NavLink>
                <br></br><br></br>
                <Routes>
                    <Route path="/child_two" element={<ChildTwo />} exact={true} strict > </Route>
                </Routes>
           

        </React.Fragment>
    )

}
export default PageTwo;
