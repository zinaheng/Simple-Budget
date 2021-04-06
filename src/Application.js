import React, { useContext } from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserProvider from "./UserProvider";
import App1 from "./App1";
import { UserContext } from "./UserProvider";
import PasswordReset from "./PasswordReset";
import { auth, generateUserDocument } from "./firebase";
import { Switch, Route, Redirect } from 'react-router-dom';
// import { UserContext } from "./UserProvider";

// const handleLogout = () => {
//   auth().signOut();
// };

function Application() {
  const user = useContext(UserContext);
  
  return (
        user ?
        <App1 />
      :
      // <App1 handleLogout = {handleLogout}/>
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;  