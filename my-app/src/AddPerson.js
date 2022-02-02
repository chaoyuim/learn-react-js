import React, { Component } from 'react';

export default class AddPerson extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    };
    onChangeHandler = (e) => {
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addperson(this.state);
    }
    render() {
        return (
            <div className="cl_addperson">
                <form onSubmit={this.onSubmitHandler}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.onChangeHandler} />
                    <br></br>
                    <label htmlFor="age">Age: </label>
                    <input type="number" id="age" onChange={this.onChangeHandler} />
                    <br></br>
                    <label htmlFor="belt">Belt: </label>
                    <input type="text" id="belt" onChange={this.onChangeHandler} />
                    <br></br>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
