import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then( users => this.setState({ monsters: users }))
    }
    

  }


  render() (
    <div className="App">
      {
        this.state.map( monster =>  <h1 key={monster.id}> {monster.name} </h1> )
      }
    </div>
  );
}

export default App;
