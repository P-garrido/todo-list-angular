import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { TodoStorageService } from '../todo-storage.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  constructor(private service: TodoStorageService) { }

  //MAIN
  @Input() item: TodoItem;
  @Input() index: number;

  @Output() removeItemClick = new EventEmitter<number>();


  changeState(item: TodoItem) {
    this.service.changeState(item);
  }

  removeItem(i: number) {
    this.removeItemClick.emit(i);
  }

}
