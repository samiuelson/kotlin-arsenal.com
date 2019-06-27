import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
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
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

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