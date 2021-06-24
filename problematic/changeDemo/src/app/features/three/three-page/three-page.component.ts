import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';
import { ThreeService } from '../services/three.service';

@Component({
  selector: 'app-three-page',
  template: `
  <div>
    <p>
      <app-user-list [userList]="list" (userSelected)="handleUserSelection($event)"></app-user-list>
    </p>
    <p>
      <app-user-detail [user]="selectedUser"></app-user-detail>
    </p>
  </div>
  `,
  styles: [
  ]
})
export class ThreePageComponent implements OnInit  {

  public list: User[];

  public selectedUser: User = {} as User;

  constructor(
    private svc: ThreeService
  ){}

  public ngOnInit(): void {
    this.list = this.svc.getCurrentUsers();    
  }

  public handleUserSelection(user:User){
    this.selectedUser = user ;
  }


}
