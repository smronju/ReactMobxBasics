import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react';

@observer
class Todo extends Component {
    render () {
        return (
            <li onDoubleClick={this.renameTodo}>
                <input type='checkbox' onChange={this.handleChange} />
                { this.props.todo.title }
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
}

export default Todo;
