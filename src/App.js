import React, { Component } from 'react';
import {observer} from 'mobx-react';
import TodoList from './TodoList';
import DevTools from 'mobx-react-devtools';
import { Grid, Row, Col, Clearfix, Well, Button } from 'react-bootstrap';

@observer
class App extends Component {

    render() {
        const { todos, editTodo, removeTodo, toggleCompleted, completedTodosCount } = this.props.store;

        return (

            <Grid>
                <DevTools />

                <Row className="show-grid">
                    <Col md={8} mdOffset={2}>
                        <Well bsSize="small">
                            <h1>Todo List.</h1>
                            <p>Double click to edit task.</p>
                            Completed: { completedTodosCount }
                        </Well>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} mdOffset={2}>
                        <Button bsStyle="primary" bsSize="xsmall" onClick={ this.newTodo }>New Todo</Button><br/>
                        <TodoList todos={ todos } editTodo={editTodo} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />
                    </Col>
                </Row>
            </Grid>





            /*<div>


                <h1>Todo List.</h1>

                <h3>Completed: { completedTodosCount }</h3>

                <TodoList todos={ todos } editTodo={editTodo} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />

                <p>Double click to edit</p>

                <button onClick={ this.newTodo }>New Todo</button>
            </div>*/
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
