import React, {Component} from 'react';
import AppBarLayout from './AppBarLayout';
import SimpleCard from './SimpleCard';
import CategorySelect from './CategorySelect';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';

class App extends Component {
  state = {
    libraries: [], 
    category: "Everything"
  }

  componentDidMount() {
    fetch('https://kotlin-arsenal.herokuapp.com/libraries', {
      method: 'get',
    })
      .then(res => res.json())
      .then((data) => { 
        console.log(data)
        this.setState({libraries: data}) 
        console.log(this.state.libraries)
      })
      .catch(console.log)
  }

  setCategory(selectedCategory) {
    console.log("Received category:" + selectedCategory)
    this.setState({category: selectedCategory})
  }

  render() {
    const libraries = this.state.libraries.filter(library => 
      library.category.name === this.state.category || "Everything" === this.state.category);
    console.log("Libraries filtered by category:" + libraries);
    return (
      <div className="App">
        <main>
          <AppBarLayout/>
          <CategorySelect categoryCallback={category => this.setCategory(category)}/>

          <div className="progress-bar" hidden={this.state.libraries.length > 0}>
            <CircularProgress color="secondary" />
            <Typography variant="h6" display="block" gutterBottom>
              <code>knock-knock... <span role="img" aria-label="sleepy face emoji">😴</span></code>
            </Typography>
          </div>

          <Grid container wrap="nowrap" spacing={2} direction="column" justify="center">
            {libraries.map((library) => (
              <Grid item key={library.githubUrl}>
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
