import React, { Component } from 'react';
import {observer} from 'mobx-react';
import TodoList from './TodoList';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
    render() {
        return (
            <div>
                <DevTools />

                <h1>Todo List.</h1>
                <TodoList todos={this.props.store.todos} />
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
