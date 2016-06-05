import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react';

@observer
class Todo extends Component {
    render () {

        const { todo } = this.props;

        return (
            <li onDoubleClick={this.renameTodo}>
                <input type='checkbox' onChange={this.handleChange} checked={todo.completed ? 'checked' : ''} />
                <span>{ todo.title }</span>
                <a href="javascript:void(0)" onClick={this.deleteTodo}> remove</a>
            </li>
        )
    }

    handleChange = () => {
        const { todo, toggleCompleted } = this.props;
        toggleCompleted(todo);
    }

    renameTodo = () => {
        const { todo, editTodo } = this.props;

        let title = prompt('Task name', todo.title);
        editTodo(todo, title);
    }

    deleteTodo = () => {
        const { todo, removeTodo } = this.props;
        removeTodo(todo.id);
    }
}

export default Todo;
