
import React, {useState} from "react";
import { Link } from "@reach/router";
import {Button, Grid, Paper, TextField} from '@material-ui/core'
import { auth } from "./firebase";
import ReactDOM from 'react-dom'
import App1 from './App1';
import './LoginPage.css';
import Logo2 from './Logo2.jpg'

const SignIn = () => {
  // const [user,setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
          console.error("Error signing in with password and email", error);
        });
      };

      const onChangeHandler = (event) => {
          const {name, value} = event.currentTarget;
        
          if(name === 'userEmail') {
              setEmail(value);
          }
          else if(name === 'userPassword'){
            setPassword(value);
          }
          
      };
      
    
  return (
    <Grid>
      <h1 className ="message">
                Simple Budget <br></br>
                <span className="motto">Helping Family, Friends to save Income</span>
               </h1> 
    <div className="mt-8">
       
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && <div className = "py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
                 
        <form className="logIn">
        
          <div className="loginContainer">
          <img src= {Logo2}></img>
          <h1>Welcome Back</h1>
            <label htmlFor="userEmail" >
              Email:
            </label>
            <input
              type="email"
              className="my-1 p-1 w-full"
              name="userEmail"
              value = {email}
              placeholder="E.g: example@gmail.com"
              id="userEmail"
              onChange = {(event) => onChangeHandler(event)}
            />
            <label htmlFor="userPassword" >
              Password:
            </label>
            <input
              type="password"
              
              name="userPassword"
              value = {password}
              placeholder="Your Password"
              id="userPassword"
              onChange = {(event) => onChangeHandler(event)}
            />
            <br />{" "}
            <button className="signIn" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
              Sign in
            </button>
            <p className="text-center my-3">
            Don't have an account?{" "}
            <Link to="signUp" className="text-blue-500 hover:text-blue-600">
              Sign up here
            </Link>{" "}
            <br />{" "}
            <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
              Forgot Password?
            </Link>
          </p>
            </div>
          </form>
          
          
        </div>
    </div>
    
    </Grid>
  );
};
export default SignIn;



// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
// import { Redirect, Router, BrowserRouter } from "react-router-dom";
// import './LoginPage.css';
// import {Button, Grid, Paper, TextField} from '@material-ui/core'
// import Main from './comp/Main/Main';
// import App1 from './App1';
// import Logo2 from "./Logo2.png";
// import {Link} from 'react-router-dom';


// const Login = (props) => {
//     const{
//         email,
//         setEmail,
//         password,
//         setPassword,
//         handleLogin,
//         handleSignup,
//         hasAccount,
//         setHasAccount,
//         emailError,
//         passwordError,
//     } = props;
//     <style>
//     @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
//     </style> 

//    function nextPage(){
//        return ReactDOM.render(<App1 />,document.getElementById('root'));
//     }

//     return (
//         <Grid>
//             <h1 className ="message">
//                 Simple Budget <br></br>
//                 <span className="motto">Helping Family, Friends to save Income</span>
//                 </h1>
//                 {/* <h2 className= "quote">Helping Family, Friends to save Income</h2> */}

//                 <section className = "login">
//                     <div className="loginContainer">
//                         <div className="logo">
//                             <img src ={Logo2} alt="website logo"/>
//                         </div>
//                         <label>Username</label>
//                         <input type="text"
//                          autoFocus 
//                          required 
//                          value={email} 
//                          onChange={e => setEmail(e.target.value)}
//                          />
//                          <p className="errorMsg">{emailError}</p>
//                         <label>Password</label>
//                         <input
//                         type = "password"
//                         required
//                         value ={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <p className="errorMsg">{passwordError}</p>
//                         <div className = "btnContainer">
//                             {hasAccount ? (
//                                 <>
//                                 <label>Welcome Back!</label>
//                                 <button onClick={handleLogin}>Sign In</button>
//                                 <p>Don't have an account? 
//                                     <span onClick={() => setHasAccount(!hasAccount)}>Sign Up
//                                     </span>
//                                 </p>
//                                 <div>
//                                 <botton onClick={handleForgot}>Forgot Password?</botton>
//                                 </div>
                                
//                                 </>
//                             ): (
//                                 <>
//                                 <label>Start your Journey with Us</label>
//                                 <button onClick={handleSignup}>Sign Up</button>
//                                 <p>Have an account ? 
//                                     <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
//                                 </p>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </section> 
//           {/* /* <Grid>
//            <Paper className= "Height" >
//                <Grid>
//                <h4 className ="sign">Welcome to simple Budget</h4>
//                </Grid>
               
//                <TextField className = "user" label ='Enter Your Email or Phone'variant="outlined" fullWidth/>
//                <h6  className="id2"></h6>
//                <TextField  type="Password" className = "pass" label ='Enter Top Secret'variant="outlined" fullWidth/>
//                <h6 className ="id"> id="none" </h6>
//                <Button className ="sub" fullWidth  variant="contained" style={{background:'rgb(9, 94, 84)', color:'white'}} onClick={nextPage}>
//                    Log In
//                </Button>
//                  <h6 className ="id3"></h6>
//                <a className ="refe" href =""> Forget Password? </a>
//                <h1 className = "id4" > </h1>
//                <hr/>
//                 <h1></h1>
//                <Button className = "bth" variant ="contained" style={{background:'rgb(9, 94, 84)', color:'white'}}>
//                    Create New Account
//                </Button>
//            </Paper>
//     </Grid> */  }
//            <h4 className = "copy">
//            Simple Budget © 2021  
//            </h4>
               
           
//         </Grid>

        
//     )
// };

// export default Login;