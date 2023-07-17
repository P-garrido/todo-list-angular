import { FormControl } from "@angular/forms";

export class TodoItem {
  description: string;
  isCompleted: boolean;
}

export class EditEvent {
  index: number;
  name: FormControl;
  constructor(i: number, n: FormControl) {
    this.index = i;
    this.name = n;
  }
}