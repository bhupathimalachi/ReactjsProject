import logo from './logo.svg';
import './App.css';
import React, { useState ,profile} from 'react';
import { globalContext } from './context/context';
import Profile from "./components/Profile";
import Login from "./components/Login"
function App() {
  const [username, setUserName] = useState("");
  const [profile, setProfile] = useState(false);
  return (
    <React.Fragment>
      <globalContext.Provider value={{ username, setUserName, profile, setProfile }}>
        {profile ? <Profile></Profile> : <Login></Login>}
      </globalContext.Provider>
    </React.Fragment>
  );
}

export default App;
