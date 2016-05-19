import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render () {
        console.log(this.props.todos);

        return (
            <ul>

                { this.props.todos.map( todo => <Todo todo={todo} /> ) }

            </ul>
        )
    }
}

export default TodoList;
