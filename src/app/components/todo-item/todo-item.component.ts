import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() t: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private ts: TodoService) { }

  ngOnInit() {
  }

  onToggle(todo) {
    console.log('toggle: ', todo);
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.ts.toggleCompleted(todo).subscribe();

  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

  // Set Dynamic Classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.t.completed
    };

    return classes;
  }

}
