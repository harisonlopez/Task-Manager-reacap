import { Component, EventEmitter, Input, Output } from '@angular/core';




@Component({
  selector: 'app-user-button',
  standalone: true,
  imports: [],
  templateUrl: './user-button.component.html',
  styleUrl: './user-button.component.css'
})

export class UserButtonComponent {
@Input({required:true}) name!:string;
@Input({required:true}) id!:string;
@Output() select= new EventEmitter()


onSelectedUser(){
this.select.emit(this.id)
}
}

