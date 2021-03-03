import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Redirect, Router, BrowserRouter } from "react-router-dom";
import './LoginPage.css';
import {Button, Grid, Paper, TextField} from '@material-ui/core'
import Main from './comp/Main/Main'
import App1 from './App1';


const Login = (props) => {
    const{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;
   

   function nextPage(){
       return ReactDOM.render(<App1 />,document.getElementById('root'));
    }

    return (
        <Grid>
            <h1 className ="message">
                Simple Budget <br></br><span>Helping Family, Friends to save Income</span>
                </h1>
                {/* <h2 className= "quote">Helping Family, Friends to save Income</h2> */}

                <section className = "login">
                    <div className="loginContainer">
                        
                        <label>Username</label>
                        <input type="text"
                         autoFocus 
                         required 
                         value={email} 
                         onChange={e => setEmail(e.target.value)}
                         />
                         <p className="errorMsg">{emailError}</p>
                        <label>Password</label>
                        <input
                        type = "password"
                        required
                        value ={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="errorMsg">{passwordError}</p>
                        <div className = "btnContainer">
                            {hasAccount ? (
                                <>
                                <label>Welcome Back!</label>
                                <button onClick={handleLogin}>Sign In</button>
                                <p>Don't have an account? 
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign Up
                                    </span>
                                </p>
                                <p>Forgot Password?</p>
                                </>
                            ): (
                                <>
                                <label>Start your Journey with Us</label>
                                <button onClick={handleSignup}>Sign Up</button>
                                <p>Have an account ? 
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                                </p>
                                </>
                            )}
                        </div>
                    </div>
                </section> 
          {/* /* <Grid>
           <Paper className= "Height" >
               <Grid>
               <h4 className ="sign">Welcome to simple Budget</h4>
               </Grid>
               
               <TextField className = "user" label ='Enter Your Email or Phone'variant="outlined" fullWidth/>
               <h6  className="id2"></h6>
               <TextField  type="Password" className = "pass" label ='Enter Top Secret'variant="outlined" fullWidth/>
               <h6 className ="id"> id="none" </h6>
               <Button className ="sub" fullWidth  variant="contained" style={{background:'rgb(9, 94, 84)', color:'white'}} onClick={nextPage}>
                   Log In
               </Button>
                 <h6 className ="id3"></h6>
               <a className ="refe" href =""> Forget Password? </a>
               <h1 className = "id4" > </h1>
               <hr/>
                <h1></h1>
               <Button className = "bth" variant ="contained" style={{background:'rgb(9, 94, 84)', color:'white'}}>
                   Create New Account
               </Button>

           </Paper>
    </Grid> */  }
           <h4 className = "copy">
           Simple Budget © 2021  
           </h4>
               
           
        </Grid>

        
    )
};

export default Login;
