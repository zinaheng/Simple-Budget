import React, { useState,useEffect} from 'react'; 
import fire from './fire';
import Login from './Login';
import App1 from './App1';
import { Grid } from '@material-ui/core';
import Main from './comp/Main/Main';
import useStyles from './styles';
import LoginPage from './Login';
const App = () => {
    const [user,setUser] = useState('');
    const [ email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                // eslint-disable-next-line default-case
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            // eslint-disable-next-line default-case
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak -password":
                    setPasswordError(err.message);
                    break;
            }
        });
    };  

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user);
            }else{
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    },[]);

    const classes = useStyles();
    return (
        <div>
                <div className="App">
                    {user ? (
                        //go to home page
                        <App1 handleLogout = {handleLogout}/>
                    ) :(
                        <Login 
                        email={email} 
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        handleLogin={handleLogin}
                        handleSignup={handleSignup}
                        hasAccount={hasAccount}
                        setHasAccount={setHasAccount}
                        emailError={emailError}
                        passwordError={passwordError}
                        />
                    )}
                   
                </div>
        </div>
    );
 }

export default App
