const incomeColors = ['#9FE2BF', '#6495ED', '#CCCCFF', '#DE3163', '#F4D03F']; 
const expenseColors = ['#E74C3C', '#8E44AD', '#16A085', '#F1C40F', '#7F8C8D']; 
const studentColors = ['#A52A2A', '#808000', '#357EC7', '#E6A9EC', '#7F8C8D'];

export const incomeCategories = [
  { type: 'Business', amount: 0, color: incomeColors[0] },
  { type: 'Paycheck', amount: 0, color: incomeColors[1] },
  { type: 'Lottery', amount: 0, color: incomeColors[2] },
  { type: 'Clients', amount: 0, color: incomeColors[3] },
  { type: 'Other income', amount: 0, color: incomeColors[4] },
];

export const expenseCategories = [
  { type: 'Travel', amount: 0, color: expenseColors[0] },
  { type: 'Shopping', amount: 0, color: expenseColors[1] },
  { type: 'Rent', amount: 0, color: expenseColors[2] },
  { type: 'Insurance', amount: 0, color: expenseColors[3] },
  { type: 'MiscItems', amount: 0, color: expenseColors[4] },
];

export const studentCategories = [
  { type: '1st Year loan', amount: 0, color: studentColors[0] },
  { type: '2nd Year loan', amount: 0, color: studentColors[1] },
  { type: '3rd Year loan', amount: 0, color: studentColors[2] },
  { type: '4th Year loan', amount: 0, color: studentColors[3] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
  studentCategories.forEach((c) => c.amount = 0);
};