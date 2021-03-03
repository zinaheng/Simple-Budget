import React from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import  Details from './Details/Details'
const Form = () => {
    const classes = useStyles();
    return (
    <Grid container spacing={3}>
            <Grid item xs={12}>
                    <Typography align="center" variant="subtitle2" gutterBottom>
                        ...........
                    </Typography>
            </Grid>
            <Grid items xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expenses">Expense</MenuItem>
                        <MenuItem value="Expenses">Student Loan</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                    <MenuItem value="Travel">Travel</MenuItem>
                    <MenuItem value="Rent">Rent</MenuItem>
                    <MenuItem value="Grocery">Grocery</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth/>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="" fullWidth/>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth><b>ADD</b></Button>
        </Grid>


    )
}

export default Form
