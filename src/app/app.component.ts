import { Component } from '@angular/core';
import { TodoItem, EditEvent } from './models/todo-item';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  //myItems: any;
  constructor(private service: TodoStorageService) {
    //this.myItems = service.items;
  }
  title = 'TodoList';



  addItem(newItem: HTMLInputElement) {
    this.items.push(
      {
        description: newItem.value,
        isCompleted: false
      }
    )
    newItem.value = "";
  }

  removeItem(i: number) {
    this.service.remove(i);
  }

  editItem(e: EditEvent) {
    this.items[e.index].description = e.name.value;
  }
}
