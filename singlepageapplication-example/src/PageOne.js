import React from "react";
import { BrowserRouter as Router, NavLink, Route, Routes, Switch } from "react-router-dom";
import ChildOne from "./ChildOne";

function PageOne() {
    return (
        <React.Fragment>
            
                <h1 style={{ color: "red" }}>PAGE ONE !!!! </h1>
                <NavLink to="/child_one" exact={true} strict>Child-One</NavLink>
                <br></br><br></br>
                <Routes>
                    <Route path="/child_one" element={<ChildOne />} exact={true} strict></Route>
                </Routes>
           

        </React.Fragment>
    )

}
export default PageOne;
