import { Component } from '@angular/core';
import { TodoStorageService } from './todo-storage.service';
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

  getItems() {
    return this.service.items;
  }
  addItem(newItem: FormControl) {
    this.service.add(newItem);
  }

  removeItem(i: number) {
    this.service.remove(i);
  }
}
