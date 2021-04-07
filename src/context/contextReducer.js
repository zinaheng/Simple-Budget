const transactions = [ {id: 1, },
    {id: 2,}]

const contextReducer = (state, action) => {
let transactions;
switch(action.type) {
case 'DELETE_TRANSACTION':
transactions = state.filter((t) => t.id !== action.payload);
return transactions;
case 'ADD':
transactions = [action.payload, ...state];
return transactions;
default:
break;
}
}
export default contextReducer;