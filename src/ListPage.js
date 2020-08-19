import React, { Component } from 'react'
import { fetchTodos, updateTodo, deleteTodo } from './todo-api';

export default class ListPage extends Component {

    state = {
        todos: [],
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
    

    render() {
        return (
            <div>
                {
                    this.state.todos.map((todo) => {
                        return <div className="todo-item" onClick={() => this.handleComplete(todo.id, todo)}>
                            <p>TODO: {todo.todo}</p>
                            <p>{todo.completed ? 'TASK COMPLETED' : 'IN PROGRESS'}</p>
                            <p><button onClick={() => this.handleDelete(todo.id)}>Delete</button></p>
                        </div>

                    })
                }
            </div>
        )
    }
}
