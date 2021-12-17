import React, { useState } from "react";
import Home from "./Home";

function Login(props) {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        if (username === "bhupathi" && password === "malachi") {
            props.history.push("/Home/Hello_1/hello-2?param=hello-3")
        } else {
            alert("incorrect username and password");
        }

    };
    return (
        <React.Fragment>  
            <fieldset>
                <legend>Login Form</legend>
                <label>UserName</label>
                <input type="text"
                    name="username"
                    onChange={(event) => setUserName(event.target.value)}></input>
                <br></br><br></br>
                <label>Password</label>
                <input type="password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}></input>
                <br></br><br></br>
                <button onClick={login}>Login</button>
            </fieldset>
        </React.Fragment>
    )
}
export default Login;