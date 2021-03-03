import React from 'react';
import { Grid } from '@material-ui/core';
import Main from './comp/Main/Main'
import Details from './comp/Main/Form/Details/Details'
import useStyles from './styles';

const App1 = ({handleLogout}) => {
    const classes = useStyles();
    return (
        <div>
            <Grid>
            <section className="App1">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
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
                    <Main />
                    </Grid>
                    
                </Grid>
                </Grid>
        </div>
    )
}

export default App1