import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.scss']
})
export class TodoNewItemComponent {


  @Output() addNewItem = new EventEmitter<HTMLInputElement>();


  addItem(newItem: HTMLInputElement) {
    this.addNewItem.emit(newItem)
  }

}
