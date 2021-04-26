import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';

import { incomeCategories, expenseCategories, studentCategories, resetCategories } from './constants/categories';

const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
    
  //const categories = title === 'Income' ? incomeCategories : expenseCategories;
  const categories = title === 'Income' ? incomeCategories : title === 'StudentLoan' ? studentCategories : expenseCategories; 
  console.log({rightTransactions, total, categories});
  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((c) => c.amount > 0);

  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
      label: 'collapse Graph',
      borderWidth: 0.01
    }],
    labels: filteredCategories.map((c) => c.type),
  }

  return {total, chartData };
}

export default useTransactions;