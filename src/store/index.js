import {observable, computed} from 'mobx';

class AppState {
    @observable todos = [
        {
            id: 1,
            title: 'Task one',
            completed: false
        },
        {
            id: 2,
            title: 'Task two',
            completed: true
        },
        {
            id: 3,
            title: 'Task three',
            completed: false
        }
    ];

    addTodo = (title) => {
        this.todos.push({
            id: this.todos.length + 1,
            title: title,
            completed: false
        });
    }

    editTodo = (todo, title) => {
        todo.title = title;
    }

    removeTodo = (id) => {
        var index = this.todos.map(todo => todo.id).indexOf(id);
        this.todos.splice(index, 1);
    }

    toggleCompleted = (todo) => {
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
