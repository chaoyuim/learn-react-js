const Forms = (props) => {
    return (
        <form onSubmit={props.onSubmitHandler}>
            <input onChange={props.onchangeHandler} type="text" />
            <button>Submit</button>
        </form>);
}

class App extends React.Component {
    state = {
        name: 'Yu',
        age: '30'
    };
    clickHandler = (e) => {
        console.log(this)
        console.log(e.target, this.state.name);
        this.setState({ name: 'Chao Yu' })
    };
    mouseOverHandler = (e) => {
        console.log(e)
        console.log(e.pageX)
    }
    onCopyHandler = (e) => {
        console.log('try to be original');
    }
    onchangeHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('form submitted', this.state.name)
    }
    render() {
        return (
            <div className="app-content-container">
                <h1> Hey {this.state.name}. </h1>
                <p>{Math.random() * 10}</p>
                <button onClick={this.clickHandler}>Click me</button>
                <button onMouseOver={this.mouseOverHandler}>Hover me</button>
                <p onCopy={this.onCopyHandler}>what we think ???</p>
                <Forms onSubmitHandler={this.onSubmitHandler} onchangeHandler={this.onchangeHandler} />
            </div>
        );
    }

}
ReactDOM.render(<App />, document.getElementById("app"));