import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  //FORM CONTROL
  @Input() item: TodoItem;
  @Input() index: number;

  @Output() removeItemClick = new EventEmitter<number>();
  constructor() { }

  changeState(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
  }

  removeItem(i: number) {
    this.removeItemClick.emit(i);
  }

}
