import React, { useState, useContext }from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import  Details from './Details/Details';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseTrackerContext } from '../../../context/context';

const initialState = {
    amount: '',
    category: '',
    type:'Income',
    date: new Date(),
}
const Form = () => {
    const classes = useState();
    const [formData, setFormData] = useState(initialState);
    //console.log(formData);
    const { addTransaction } = useContext(ExpenseTrackerContext);

    const createTransaction = () => {
            const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
            addTransaction(transaction);
            setFormData(initialState);
    }
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
                    <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                        <MenuItem value="Studentloan">Student Loan</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value})}>
                    <MenuItem value="Travel">Travel</MenuItem>
                    <MenuItem value="Insurance">Insurance</MenuItem>
                    <MenuItem value="Paycheck">Grocery</MenuItem>
                    <MenuItem value="Business">Business</MenuItem>
                    <MenuItem value="Lottery">Lottery</MenuItem>
                    <MenuItem value="Clients">Clients</MenuItem>
                    <MenuItem value="Rent">Rent</MenuItem>
                    <MenuItem value="Shopping">Shopping</MenuItem>
                    <MenuItem value="MiscItems">MiscItems</MenuItem>
                    <MenuItem value="Other income">Other income</MenuItem>
                    <MenuItem value="1st Year loan">1st Year loan</MenuItem>
                    <MenuItem value="2nd Year loan">2nd Year loan</MenuItem>
                    <MenuItem value="3rd Year loan">3rd Year loan</MenuItem>
                    <MenuItem value="4th Year loan">4th Year loan</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value})} />
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value})} />
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}><b>ADD</b></Button>
        </Grid>

    )
}

export default Form
