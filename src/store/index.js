import {observable, computed} from 'mobx';

class AppState {
    @observable todos = [];

    addTodo = (title) => {
        this.todos.push({
            title: title,
            completed: false
        });
    }

    toggleCompleted = (todo) => {
        console.log(todo.title);
        todo.completed = !todo.completed;
    }

    @computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }
}

const Store = new AppState();

export default Store;
