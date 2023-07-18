import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EditEvent, TodoItem } from '../models/todo-item';
import { TodoStorageService } from '../todo-storage.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  constructor(private service: TodoStorageService) { }

  @Input() item: TodoItem;
  @Input() index: number;

  @Output() removeItemClick = new EventEmitter<number>();
  @Output() editItemClick = new EventEmitter<EditEvent>();

  onEdit: boolean = false;
  editName = new FormControl('', Validators.required);
  ngOnInit() {
    this.editName.setValue(`${this.item.description}`)
  }


  changeState(item: TodoItem) {
    this.service.changeState(item);
  }

  removeItem() {
    this.removeItemClick.emit(this.index);
  }

  edit() {
    if (this.onEdit) {
      this.onEdit = false;
    }
    else {
      this.onEdit = true;
      this.editName.setValue(`${this.item.description}`);
    }
  }


  sendEdit() {
    const eEvento = new EditEvent(this.index, this.editName);
    this.editItemClick.emit(eEvento);
    this.editName.reset();
    this.onEdit = false;
  }

}
