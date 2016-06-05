import React, { Component } from 'react';
import {observer} from 'mobx-react';
import TodoList from './TodoList';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {

    render() {
        const { todos, editTodo, removeTodo, toggleCompleted, completedTodosCount } = this.props.store;

        return (
            <div>
                <DevTools />

                <h1>Todo List.</h1>

                <h3>Completed: { completedTodosCount }</h3>

                <TodoList todos={ todos } editTodo={editTodo} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />
                
                <p>Double click to edit</p>

                <button onClick={ this.newTodo }>New Todo</button>
            </div>
        );
    }

    newTodo = () => {
        let task = prompt('Enter a new todo:', '');

        if (task) {
            this.props.store.addTodo(task);
        }

        return false;
    }
}

export default App;
