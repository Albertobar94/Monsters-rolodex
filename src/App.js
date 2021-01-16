import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  state = {
      monsters: [],
      searchField: ''
    }

    componentDidMount = () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then( users => this.setState({ monsters: users }))
    }

    handleChange = (e) => {
      this.setState( {searchField: e.target.value} )
    }

    render() {
      return (
        <div className="App">
          <h1> Monsters Rolodex </h1>
          <SearchBox
            placeholder  = "Search Monsters"
            handleChange = { this.handleChange }
          />
          <CardList dataMonsters={ this.state } />
        </div>
      );
    }
}

export default App;



