import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBarLayout from './AppBarLayout';
import SimpleCard from './SimpleCard';
import CategorySelect from './CategorySelect';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  state = {
    libraries: []
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/http://kotlin-arsenal.herokuapp.com/libraries', {
      method: 'get',
      headers: {
        "origin": "kotlin-arsenal.com",
      }
    })
      .then(res => res.json())
      .then((data) => { 
        console.log(data)
        this.setState( { libraries: data} ) 
        console.log(this.state.libraries)
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="App">
        <React.Fragment>
      <CssBaseline />
      </React.Fragment>
      <main>
      <AppBarLayout/>
      <CategorySelect/>
      <Grid container spacing={10}>
        {this.state.libraries.map((library) => (
          <Grid item xs key={library.githubUrl}>
            <SimpleCard value={library} /> 
          </Grid>
        ))}
      </Grid>
      </main>
      </div>
    );
  }
}

export default App;
