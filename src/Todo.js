import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Checkbox } from 'react-bootstrap';

@observer
class Todo extends Component {
    render () {

        const { todo } = this.props;

        return (
            <li className="list-group-item" onDoubleClick={this.renameTodo}>
                <input type='checkbox' onChange={this.handleChange} checked={todo.completed ? 'checked' : ''} style={style.checkbox} />
                { todo.title }
                <span className="pull-right" onClick={this.deleteTodo}>x</span>
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

const style = {
    checkbox: {
        marginRight: '10px'
    }

}

export default Todo;
