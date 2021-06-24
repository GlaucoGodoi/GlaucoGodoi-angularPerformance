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
      <app-user-detail [user]="selectedUser" (userChanged)="handleUserChange($event)" ></app-user-detail>
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

  public handleUserSelection(user:User): void{
    this.selectedUser = user ;
  }

  public handleUserChange(user: User): void{
    //this.list[user.id - 1] = user;

    // this.list = this.list.map(item=> {return {id: item.id, username: item.username,address: item.address} as User});
    // this.list[user.id - 1] = {id: user.id, username: user.username, address: user.address} as User;

    this.list = [... this.list];
    this.list[user.id - 1] = {... user};

  }

}
