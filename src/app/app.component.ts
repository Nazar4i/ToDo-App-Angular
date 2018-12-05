import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  

  todos = [{
    todoText: 'Study courses',
    isDone: false
  }, {
    todoText: 'Learn Angular',
    isDone: false
  }, {
    todoText: 'Learn Type Script',
    isDone: false
  }];

  todosToday = [{
    todoText: 'Code review',
    isDone: false
  }];

  
  addTodoToList(todoName: string) {
    this.todos.push({
      todoText: todoName,
      isDone: false
    });
  }

  statusDone: string;
  public onSelectTodo(todo: string): void {
    this.statusDone = todo;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
