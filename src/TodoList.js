import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react';
import Todo from './Todo';

@observer
class TodoList extends Component {
    render () {

        if(!this.props.todos) {
            return null;
        }

        return (
            <ul>
                { this.props.todos.map((todo, index) => <Todo key={index} todo={todo} /> ) }
            </ul>
        )
    }
}

export default TodoList;
