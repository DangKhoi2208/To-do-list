import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";

export interface todo{
  title:string;
  description:string;
  status:string;
}

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  title = new FormControl("");
  description = new FormControl("");

  @Output() newItemEvent = new EventEmitter<todo>();

  handleSubmit(){
    let newItem : todo = {
      title : this.title.value || '',
      description : this.description.value || '',
      status: 'pending'
    }
    this.newItemEvent.emit(newItem);
  }
}
