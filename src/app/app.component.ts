import { Component } from '@angular/core';
import { TodoItem, EditEvent } from './models/todo-item';
import { FormControl } from '@angular/forms';
import { TodoStorageService } from './todo-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  myItems: TodoItem[];
  constructor(private service: TodoStorageService) {
    this.myItems = service.items;
  }
  title = 'TodoList';



  addItem(newItem: FormControl) {
    this.service.add(newItem);
  }

  removeItem(i: number) {
    this.service.remove(i);
  }

  editItem(e: EditEvent) {
    this.service.editItem(e);
  }
}
