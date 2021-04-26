import { makeStyles } from  '@material-ui/core/styles';
import { red, green, blue } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    avatarIncome: {
        color: '#fff',
        backgroundColor: green[400],
    },
    avatarExpense: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[400],
    },
    avatarStudent: {
        color: '#0000FF',
        backgroundColor: blue[400],
    },
    list: {
        maxHeight: '150px',
        overflow: 'auto',
    },
}));