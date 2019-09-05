import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor(private ts: TodoService) { }

  ngOnInit() {
    this.ts.getTodos().subscribe(res => {
      this.todos = res;
    });

  }

  deleteTodo(t: Todo) {
    console.log('deletetodo: ', t);
    // Remove from UI
    this.todos = this.todos.filter(todo => todo.id !== t.id)
    // Remove from Server
    this.ts.deleteTodo(t).subscribe();
  }

  addTodo(t: Todo) {
    this.ts.addTodo(t).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
