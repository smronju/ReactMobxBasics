import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react';
import Todo from './Todo';

@observer
class TodoList extends Component {
    render () {

        const { todos, editTodo, toggleCompleted } = this.props;

        if(!todos) {
            return null;
        }

        return (
            <ul>
                {
                    todos.map ((todo, index) => {
                        return <Todo
                            key={index}
                            todo={todo}
                            editTodo={editTodo}
                            toggleCompleted={toggleCompleted}
                        />;
                    })
                }
            </ul>
        )
    }
}

export default TodoList;
