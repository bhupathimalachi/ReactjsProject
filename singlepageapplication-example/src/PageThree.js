import React from "react";
import ChildThree from "./ChildThree";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
//import {Switch} from "react-router-dom";

function PageThree() {
    return (
        <React.Fragment>
           
                <h1 style={{ color: "blue" }}>PAGE THREE !!!! </h1>
                <NavLink to="/child_three" activeStyle={{ color: "red" }} exact={true} strict>Child_Three</NavLink>
                <br></br><br></br>
                <Routes>
                    <Route path="/child_three" element={<ChildThree />} ></Route>
                </Routes>
           

        </React.Fragment>
    )

}
export default PageThree;
