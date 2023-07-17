import { Injectable } from '@angular/core';
import { TodoItem } from './models/todo-item';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TodoStorageService {

  constructor() {

    console.log("Servicio creado");
  }

  items: TodoItem[] = [];

  add(newItem: FormControl) {
    this.items.push(
      {
        description: newItem.value,
        isCompleted: false
      }
    )
  }

  remove(i: number) {
    this.items.splice(i, 1);
  }

  changeState(item: TodoItem) {
    item.isCompleted = !item.isCompleted;
  }



}


