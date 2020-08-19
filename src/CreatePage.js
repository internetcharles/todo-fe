import React, { Component } from 'react'
import { createTodo } from './todo-api';

export default class CreatePage extends Component {
    state = {
        todo: '',
        completed: false,
    }

    componentDidMount = async() => {
        if (!this.props.token) {
            this.props.history.push('/login');
        }
    }

    handleSubmit = async () => {
        console.log('todo');
        try{
            await createTodo({
                todo: this.state.todo,
                completed: this.state.completed,
            });
            this.props.history.push('/list');
        }
        catch (e) {
            console.log(e.message);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="What do you need to do?" onChange={e => this.setState({todo: e.target.value})} value={this.state.todo} />
                    <p>Completed?</p>
                    <select onChange={e => this.setState({completed: e.target.value})}>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                    <br /> <br />
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}
