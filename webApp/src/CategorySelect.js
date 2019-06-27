import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 160,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function CategorySelect() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      age: '',
      name: 'hai',
    });
  
    function handleChange(event) {
        setValues(oldValues => ({
          ...oldValues,
          [event.target.name]: event.target.value,
        }));
      }
  
    return (
        <FormControl className={classes.formControl}>
            <Select
                value={values.age}
                onChange={handleChange}
                displayEmpty
                name="Category"
                className={classes.selectEmpty}
            >
                <MenuItem value="">Everything</MenuItem>
                <MenuItem value={10}>Logs</MenuItem>
                <MenuItem value={20}>Databases</MenuItem>
                <MenuItem value={30}>Reactive</MenuItem>
                <MenuItem value={30}>Networking</MenuItem>
            </Select>
        </FormControl>
    );
}