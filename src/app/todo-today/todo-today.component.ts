import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-today',
  templateUrl: './todo-today.component.html',
  styleUrls: ['./todo-today.component.css']
})
export class TodoTodayComponent implements OnInit {

  @Input() todoTodayItem;

  constructor() { }

  ngOnInit() {
  }

}
