import React, { useState } from "react";
import { myContext } from "./context/myContext";
import Profile from "./components/Profile";
import Login from "./components/Login";
function App() {
  const [username, setUsername] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  return (
    <React.Fragment>
      <myContext.Provider value={{ username, setUsername, showProfile, setShowProfile }}>
        {showProfile ? <Profile></Profile> : <Login></Login>}
      </myContext.Provider>
    </React.Fragment>
  )
};
export default App;
