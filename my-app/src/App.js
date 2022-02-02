import { Component } from 'react/cjs/react.production.min';
import AddPerson from './AddPerson';
import Persons from './Persons'



class App extends Component {
  componentDidMount() {
    console.log(`component mounted`)
  }
  componentDidUpdate(prevProps, prevStates) {
    console.log(`components did updated`, prevProps, prevStates)
  }

  state = {
    persons: [
      { name: 'Chao Yu', age: '31', belt: 'brown', id: 1 },
      { name: 'Yoshio P', age: '21', belt: 'black', id: 2 },
      { name: 'John Snow', age: '121', belt: 'blue', id: 3 }
    ]
  };
  addperson = (person) => {
    console.log(person);
    person.id = Math.random() * 10;
    let persons_copy = [...this.state.persons];
    persons_copy.includes(person) ? void (0) : persons_copy.push(person);
    this.setState({ persons: persons_copy });
    console.log(persons_copy)

  }
  onClickDeleteHandler = (id) => {
    // let persons_copy = [...this.state.persons];
    let persons_copy = this.state.persons.filter(el => {
      return el.id !== id
    })
    this.setState({ persons: persons_copy });
  }
  render() {
    return (
      <div className="App">
        <h1>My React App. </h1>
        <p>WElcome1 </p>
        <Persons persons={this.state.persons} onClickDeleteHandler={this.onClickDeleteHandler} />
        <AddPerson addperson={this.addperson} />
      </div>
    );
  }
}
export default App;
