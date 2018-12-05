import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoComponent implements OnInit {

  @Input() todoItem; 
  @Input() todoDeleteItem;
  getClass() {
    return {
      'new-todo': true
    }
  }
  onDeleteTodo(type: string) {
    this.todoDeleteItem = type === 'delete' ? true : false;
  }
  onAction(type: string) {
    this.todoItem.isDone = type === 'done' ? true : false;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
