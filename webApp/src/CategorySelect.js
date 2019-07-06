import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

export default function CategorySelect(props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState("Everything");

  const handleChange = event => {
    var newCategory = event.target.value;
    setCategory(newCategory);
    console.log("Selected category:" + newCategory);
    props.categoryCallback(newCategory);
  } 

  return (
      <FormControl className={classes.formControl}>
          <Select
              value={category}
              onChange={handleChange}
              input={<BootstrapInput name="category"/>}
              name="Category" >
              <MenuItem value="Everything">Everything</MenuItem>
              <MenuItem value="Logs">Logs</MenuItem>
              <MenuItem value="Database">Databases</MenuItem>
              <MenuItem value="Reactive">Reactive</MenuItem>
              <MenuItem value="Networking">Networking</MenuItem>
          </Select>
      </FormControl>
  );
}