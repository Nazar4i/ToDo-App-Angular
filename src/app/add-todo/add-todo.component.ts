import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() onAddTodo = new EventEmitter<String>(); 


  todoName = '';

  addTodo() {
    this.onAddTodo.emit(this.todoName);
    this.todoName = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
