import React, { Component } from 'react';
import TodoList from './TodoList';
import todos from './todos';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Todo List.</h1>

                <TodoList todos={todos} />
            </div>
        );
    }
}
