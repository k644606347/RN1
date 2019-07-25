import mobx, { observable, computed, autorun } from 'mobx';
class ObservableTodoStore {
    
	@observable todos = [];
    @observable pendingRequests = 0;

    constructor() {
        autorun(() => console.log(this.report));
    }

	@computed get completedTodosCount() {
    	// return this.todos.filter(
		// 	todo => {
		// 		// debugger;
		// 		// return true;
		// 		return todo.completed === true;
		// 	}
		// ).length;

		let targetTodo = this.todos.find((n, i) => i === 0);
		return !!(targetTodo && targetTodo.completed);
    }

	report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	addTodo(task) {
		let length = this.todos.length;

		this.todos[length] = 
			{
				task: task,
				completed: false,
				assignee: null
			};
		// this.todos.push({
		// 	task: task,
		// 	completed: false,
		// 	assignee: null
		// });
	}
}


const observableTodoStore = new ObservableTodoStore();
export {
	ObservableTodoStore,
    observableTodoStore
}