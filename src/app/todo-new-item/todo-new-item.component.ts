import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.scss']
})
export class TodoNewItemComponent {


  @Output() addNewItem = new EventEmitter<FormControl>();

  item = new FormControl('');


  addItem() {
    this.addNewItem.emit(this.item)
    this.item.reset()
  }

}
