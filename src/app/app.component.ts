import { Component } from '@angular/core';
import { TodoItem } from './models/todo-item';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoList';
  items: TodoItem[] = [];



  addItem(newItem: FormControl) {
    this.items.push(
      {
        description: newItem.value,
        isCompleted: false
      }
    )
  }

  removeItem(i: number) {
    this.items.splice(i, 1);
  }

  editItem(e: any) {
    console.log(e);
  }
}
