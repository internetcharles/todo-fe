import React, { Component } from 'react'
import { fetchTodos, updateTodo, deleteTodo, createTodo } from './todo-api';


export default class HomePage extends Component {

    state = {
        todos: [],
        todo: '',
        completed: false
    }

    componentDidMount = async () => {
        if(!this.props.token) {
            this.props.history.push('/login');
        }
        else {
            const data = await fetchTodos(this.props.token);
            this.setState({
                todos: data.body
            });
            console.log(data.body)
        }
    }

    handleComplete = async (id, todo) => {
        await updateTodo(id, {
            todo: todo.todo,
            completed: true,
        })

        const updatedTodos = await fetchTodos(this.props.token);

        this.setState({
            todos: updatedTodos.body,
            todo: '',
            completed: true,
        })
    }

    handleDelete = async (id) => {

        await deleteTodo(id);

        const updatedTodos = await fetchTodos(this.props.token);

        this.setState({
            todos: updatedTodos.body,
            todo: '',
            completed: true,
        })
    }

    handleSubmit = async () => {
        console.log('todo');
        try{
            await createTodo({
                todo: this.state.todo,
                completed: this.state.completed,
            });
            const data = await fetchTodos(this.props.token);
            this.setState({
                todos: data.body
            });
        }
        catch (e) {
            console.log(e.message);
        }
    }

    render() {
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="What do you need to do?" onChange={e => this.setState({todo: e.target.value})} value={this.state.todo} />
                        <br /> <br />
                        <button>SUBMIT</button>
                    </form>
                </div>
                <div className="item-container">
                {
                    this.state.todos.map((item) => {
                        return <div className="todo-item" onClick={() => this.handleComplete(item.id, item)}>
                            <p>TODO: {item.todo}</p>
                            <p>{item.completed ? 'TASK COMPLETED' : 'IN PROGRESS'}</p>
                            <p><button onClick={() => this.handleDelete(item.id)}>Delete</button></p>
                        </div>

                    })
                }
                </div>
            </div>
        )
    }
}
