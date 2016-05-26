import {observable, computed} from 'mobx';

export default class AppState {
    @observable todos = [];

    addTodo = (title) => {
        this.todos.push({
            title: title,
            completed: false
        });
    }
}
