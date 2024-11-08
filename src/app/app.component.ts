import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserButtonComponent } from './user-button/user-button.component';
import { userData } from './user-button/Data';
import { UserTaskComponent } from './user-task/user-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserButtonComponent, UserTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = userData;
  selectedId?: string;

  get idOfSelectedBtn() {
    return this.data.find((user) => user.id === this.selectedId);
  }

  onClickedUser(id: string) {
    this.selectedId = id;
  }
}
