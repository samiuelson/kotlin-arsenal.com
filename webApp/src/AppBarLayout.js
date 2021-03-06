import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import logo from './logo.png';

const useStyles = makeStyles({
    root: {
      width: '100%',
      textAlign: "left",
    },
    appLogo: {
      height: '10vmin',
      marginTop: '2vh',
      marginBottom: '2vh',
      marginRight: '2vh',
    },
  });
  
  function AppBarLayout() {
    const classes = useStyles();
    return (
      <AppBar position="relative">
          <Toolbar>
            <img src={logo} className={classes.appLogo} alt="logo" />
            <div className={classes.root}>
              <Typography variant="h5"color="inherit" gutterBottom>
                <code>Kotlin-Arsenal</code>
              </Typography>
              <Typography variant="overline"  color="inherit" gutterBottom noWrap>
                A curated list of Kotlin libraries
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
    );
  }
  
export default AppBarLayout;