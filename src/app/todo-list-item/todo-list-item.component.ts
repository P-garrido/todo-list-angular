import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

<<<<<<< HEAD
  constructor(private service: TodoStorageService) { }

  //MAIN
=======
>>>>>>> todoFormControl
  @Input() item: TodoItem;
  @Input() index: number;

  @Output() removeItemClick = new EventEmitter<number>();
<<<<<<< HEAD
=======
  @Output() editItemClick = new EventEmitter<EditEvent>();

  onEdit: boolean = false;
  editName = new FormControl('', Validators.required);
  ngOnInit() {
    this.editName.setValue(`${this.item.description}`)
  }
>>>>>>> todoFormControl


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
    }
  }


  sendEdit() {
    const eEvento = new EditEvent(this.index, this.editName);
    this.editItemClick.emit(eEvento);
    this.editName.reset();
    this.onEdit = false;
  }

}
