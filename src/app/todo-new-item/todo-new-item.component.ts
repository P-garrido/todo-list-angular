import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-new-item',
  templateUrl: './todo-new-item.component.html',
  styleUrls: ['./todo-new-item.component.scss']
})
export class TodoNewItemComponent {


  @Output() addNewItem = new EventEmitter<FormControl>();

  name = new FormControl('', Validators.required);


  sendItem() {
    this.addNewItem.emit(this.name)
    this.name.reset();
  }

}
