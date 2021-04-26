import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import {Bar } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from   '../../../../uuuuuuu'
//import { BarChart } from '@material-ui/icons';
const DetailsCard = ({ title }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    //<Card className={title === 'Income' ? classes.income :classes.expense}>
    <Card className={title === 'Income' ? classes.income : title === 'StudentLoan' ? classes.StudentLoan : classes.expense }> 
      <CardHeader title={title}  />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Bar data={chartData} />
      </CardContent>
    </Card>
  );

};

export default DetailsCard;
