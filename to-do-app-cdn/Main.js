
class App extends React.Component {
    state = {
        todos: [
            { id: 1, content: 'finish homework' },
            { id: 2, content: 'play fifa' },
            { id: 3, content: 'finish water' }
        ]
    }

    onClickDeleteHandler = (id) => {
        let state_todos_copy = this.state.todos.filter((elmt) => {
            return elmt.id !== id
        })
        this.setState({
            todos: state_todos_copy
        })
    }
    onAddNewTodos = (newtodo) => {
        newtodo.id = Math.random() * 10;
        let state_todos_copy = [...this.state.todos];
        state_todos_copy.includes(newtodo) ? (void (0)) : (state_todos_copy.push(newtodo))
        this.setState({
            todos: state_todos_copy
        });
    }

    render() {
        return (
            <div className='todo-app container'>
                <h1 className="center blue-text"> Todo's </h1>
                <ToDos todos={this.state.todos} onClickDeleteHandler={this.onClickDeleteHandler} ></ToDos>
                <AddToDo onAddNewTodos={this.onAddNewTodos} />
            </div>
        );
    }
}

const ToDos = ({ todos, onClickDeleteHandler }) => {
    const todolist = todos.length > 0 ? (
        todos.map(el => (
            <div className="collection-item" key={el.id}>
                <span onClick={() => { onClickDeleteHandler(el.id) }}>{el.content}</span>
            </div>
        ))
    ) : (
        <p className="center">You have no todos left!</p >
    );
    return (
        <div className="todos collection">
            {todolist}
        </div>
    )
};


class AddToDo extends React.Component {
    state = {
        content: null
    }
    onFormSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onAddNewTodos(this.state)
        this.setState({
            content: ''
        });
    }
    onInputChangeHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmitHandler}>
                    <label>Add New Todos: </label>
                    <input type="text" onChange={this.onInputChangeHandler} value={this.state.content} ></input>
                </form>
            </div>
        );

    }
}



ReactDOM.render(<App />, document.getElementById("app"));


