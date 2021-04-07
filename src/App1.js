import React from 'react';
import { Grid } from '@material-ui/core';
import Main from './comp/Main/Main'
import Details from './comp/Main/Form/Details/Details'
import useStyles from './styles';
import Application from "./Application";
import Logo2 from './Logo2.jpg'
import App from './App';
import { useContext } from "react";
import { UserContext } from "./UserProvider";
import { navigate } from "@reach/router";
import {auth} from "./firebase";


// const handleLogout = () => {
//     auth().signOut();
// };
const App1 = () => {
    const classes = useStyles();
    return (
        
        <div>
            <Grid>
            <section className="App1">
            <nav>
                <div className="logo">
                    <img src={Logo2}/>
                </div>
                <h1 className= "h">Welcome</h1>
                <button  onClick = {() => {auth.signOut()}}>Sign out</button>
                
            </nav>
        </section>
                <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh' }}>
                    <Grid item xs={12} sm={4}>
                        <Details title="Income" />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Details title="Expense"/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Details title="Student Loan"/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Main />
                    </Grid>
                </Grid>
                </Grid>
        </div>
    );
}
export default App1