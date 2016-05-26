import {observable, computed} from 'mobx';

class AppState {
    @observable todos = [];

    addTodo = (title) => {
        this.todos.push({
            title: title,
            completed: false
        });
    }
}

const Store = new AppState();

export default Store;
