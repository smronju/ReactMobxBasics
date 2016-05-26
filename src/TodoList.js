import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react';
import Todo from './Todo';

@observer
class TodoList extends Component {
    render () {

        const { todos, toggleCompleted } = this.props;

        if(!todos) {
            return null;
        }

        return (
            <ul>
                { todos.map((todo, index) => <Todo key={index} todo={todo} toggleCompleted={toggleCompleted} /> ) }
            </ul>
        )
    }
}

export default TodoList;
