import { Todo } from './../models/Todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = 5;

  // get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + '?_limit=' + this.todosLimit);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any> {
    return this.http.delete(this.todosUrl + '/' + todo.id, httpOptions);
  }

  addTodo(todo: Todo): Observable<any> {
    return this.http.post(this.todosUrl, todo, httpOptions);
  }
}


// Dummy data for todos.
// [
//       {
//         id: 1,
//         title: 'Todo Haha',
//         completed: true
//       },
//       {
//         id: 2,
//         title: 'Todo Two',
//         completed: true
//       },
//       {
//         id: 3,
//         title: 'Todo Three',
//         completed: false
//       }
//     ];
