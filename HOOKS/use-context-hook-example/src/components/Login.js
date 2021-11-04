import React, { useContext } from "react";
import { myContext } from "../context/myContext";
function Login() {
    const { setUsername, setShowProfile } = useContext(myContext)
    return (
        <React.Fragment>
            <fieldset>
                <legend>Login</legend>
                <input type="text"
                    placeholder="USER NAME"
                    onChange={(event) => setUsername(event.target.value)}></input>
                <br></br><br></br>
                <input type="password"
                    placeholder="PASSWORD"></input>
                <br></br><br></br>
                <button onClick={() => setShowProfile(true)}>Login</button>
            </fieldset>
        </React.Fragment>
    )

}
export default Login;