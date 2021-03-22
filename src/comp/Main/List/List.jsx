import React from 'react';
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import {Delete, MoneyOff,} from '@material-ui/icons';

//import {ExpenseTrackerContext} from '../../../context/context';
import useStyles from './styles.js';
//import { Slide } from '@material-ui/core';

const  List = () => {
    const classes = useStyles();  
    const transactions = [

      { id:1, type:"Income", category:'Salary', amount:100, date:"march 20" },
      { id:2, type:"Expense", category:'Dog food', amount:20, date:"march 19" },
      { id:3, type:"Expense", category:'Starbucks', amount:10, date:"march 18" },
      { id:4, type:"Expense", category:'College 1st Installment', amount:2000, date:"march 20" },

    ];
    return (

<MUIList dense  = {false} className ={classes.list} >
    {transactions.map((transaction)=>(

        <Slide direction ="down" in mountOnEnter unmountOnExit key = {transaction.id}>
              <ListItem>
                  <ListItemAvatar>
                      <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                           <MoneyOff/>
                      </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary = {transaction.category} secondary = {`$${transaction.amount} - ${transaction.date}`}/>
                  <ListItemSecondaryAction>

                   {/*} <IconButton edge = "end" aria-label ="delete" onClick="">

                        <Delete/>
                    </IconButton> */}
                    <IconButton aria-label="delete">
  <Delete />
</IconButton>
                  </ListItemSecondaryAction>
              </ListItem>
        </Slide>
    ))}
</MUIList>
    
    );
  }

export default List
