import {Component,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "../components/navbar/navbar.component";
import {todo, TodoFormComponent} from "../components/todo-form/todo-form.component";
import {TodoListComponent} from "../components/todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TodoFormComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todoFromApp: todo[] = [
    // {
    //   title:'khoi',
    //   description:'hello',
    // }
  ]

  addItem(newItem:todo){
    this.todoFromApp.push(newItem);
  }

}
