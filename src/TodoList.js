import React, { Component, PropTypes } from 'react';
import {observer} from 'mobx-react';
import Todo from './Todo';

@observer
class TodoList extends Component {
    render () {

        const { todos, editTodo, removeTodo, toggleCompleted } = this.props;

        if(!todos) {
            return null;
        }

        return (
            <ul className="list-group" style={style.list}>
                {
                    todos.map ((todo, index) => {
                        return <Todo
                            key={index}
                            todo={todo}
                            editTodo={editTodo}
                            removeTodo={removeTodo}
                            toggleCompleted={toggleCompleted}
                        />;
                    })
                }
            </ul>
        )
    }
}

const style = {
    list: {
        marginTop: '20px'
    }
}

export default TodoList;
