import {Component, Input} from '@angular/core';
import {todo} from "../todo-form/todo-form.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  @Input() todos:todo[]=[];
  finish(i : number) {
    this.todos[i].status = 'done'
  }
}
