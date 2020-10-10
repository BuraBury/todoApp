import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: string[] = [];

  todoForm = new FormGroup({
    todoName: new FormControl('', Validators.required),
  });

  public onSubmit(): void {
    this.todos.push(this.todoForm.value.todoName);
    this.todoForm.setValue({
      todoName: ' '
    });
  }
}
