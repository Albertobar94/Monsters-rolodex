import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

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
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter( monster =>  monster.name.toLowerCase().includes(searchField.toLowerCase())

      )
      return (
        <div className="App">
          <h1> Monsters Rolodex </h1>
          <SearchBox 
            placeholder  = "Search Monsters"
            handleChange = { this.handleChange }
          />
          <CardList monsters={filteredMonsters} />
        </div>
      );
    }
}

export default App;


git branch -M main
git remote add origin git@github.com:Albertobar94/Monsters-rolodex.git
git push -u origin main