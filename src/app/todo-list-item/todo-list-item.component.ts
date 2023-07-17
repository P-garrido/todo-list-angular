import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../models/todo-item';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {


  @Input() item: TodoItem;
  @Input() index: number;

  @Output() removeItemClick = new EventEmitter<number>();
  @Output() editItemClick = new EventEmitter<[number, FormControl]>();

  onEdit: boolean = false;

  editName = new FormControl('');

  changeState(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
  }

  removeItem() {
    this.removeItemClick.emit(this.index);
  }

  edit() {
    if (this.onEdit) {
      this.onEdit = false;
      this.editItemClick.emit([this.index, this.editName]);
      this.editName.reset();
    }
    else {
      this.onEdit = true;
    }
  }

}
