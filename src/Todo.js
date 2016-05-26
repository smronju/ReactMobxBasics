import React, { Component, PropTypes } from 'react';

class Todo extends Component {
    render () {
        return (
            <li>
                <input type='checkbox' onChange={this.handleChange} />
                { this.props.todo.title }
            </li>
        )
    }

    handleChange = () => {
        const { todo, toggleCompleted } = this.props;
        toggleCompleted(todo);
    }
}

export default Todo;
