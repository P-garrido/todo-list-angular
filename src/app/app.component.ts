import { Component } from '@angular/core';
import { TodoItem } from './models/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoList';
  items: TodoItem[] = [
    {
      description: "Comprar carne",
      isCompleted: false
    },
    {
      description: "Comprar carbón",
      isCompleted: true
    },
    {
      description: "Prender fuego",
      isCompleted: false
    }
  ];



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
    this.items.splice(i, 1);
  }
}
