import Component from '@glimmer/component';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type Todo from 'ember-ts/models/todo';

interface TodoListArgs {
  Args: {
    title: string;
  };
}

export default class TodoListComponent extends Component<TodoListArgs> {
  @tracked newTodoTitle: string = '';
  @tracked todos: Todo[] = [];

  get hasTodo() {
    return this.todos.length > 0;
  }

  @action
  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.todos = [
        ...this.todos,
        { title: this.newTodoTitle, completed: false },
      ];
      this.newTodoTitle = '';
    }
  }

  @action
  async toggleCompleted(todo: Todo) {
    this.todos = this.todos.map((t) =>
      t === todo ? { ...t, completed: !t.completed } : t,
    );
  }

  @action
  async deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((item) => todo.title != item.title);
  }

  @action
  handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    this.newTodoTitle = target.value;
  }

  @action
  handleKeyDown(e: KeyboardEvent) {
    if (e.key == 'Enter') {
      this.addTodo();
    }
  }
}
