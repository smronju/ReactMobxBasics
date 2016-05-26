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
        todo.completed = !todo.completed;
    }

    editTodo = (todo, title) => {
        console.log(todo);
        console.log(title);
        todo.title = title;
    }

    @computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
    }
}

const Store = new AppState();

export default Store;
