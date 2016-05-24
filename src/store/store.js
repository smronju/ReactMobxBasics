import {observable, computed} from 'mobx';
import tasks from '../todos';

export default class AppState {
    @observable todos = [];

    addTodo = (title) => {
        this.todos.push({
            title: title,
            completed: false
        });
    }
}
