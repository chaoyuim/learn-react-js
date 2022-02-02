import { Component } from 'react/cjs/react.production.min';
import Persons from './Persons'



class App extends Component {
  state = {
    persons: [
      { name: 'Chao Yu', age: '31', belt: 'brown', id: 1 },
      { name: 'Yoshio P', age: '21', belt: 'black', id: 2 },
      { name: 'John Snow', age: '121', belt: 'blue', id: 3 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>My React App. </h1>
        <p>WElcome1 </p>
        <Persons persons={this.state.persons} />
      </div>
    );
  }
}
export default App;
