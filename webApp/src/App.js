import React, {Component} from 'react';
import AppBarLayout from './AppBarLayout';
import SimpleCard from './SimpleCard';
import CategorySelect from './CategorySelect';
import Grid from '@material-ui/core/Grid';
import './App.css';

class App extends Component {
  state = {
    libraries: [], 
    category: "Everything"
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