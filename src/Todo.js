import React, { Component, PropTypes } from 'react';

class Todo extends Component {
    render () {
        return (
            <li>
                <input type='checkbox' />
                { this.props.todo.title }
            </li>
        )
    }
}

export default Todo;
