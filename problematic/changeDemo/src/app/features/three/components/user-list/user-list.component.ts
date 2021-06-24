import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../data/user';

@Component({
  selector: 'app-user-list',
  template: `
  <ul>
    <li *ngFor="let user of userList">
      <div>
        <span class="id">{{user.id}}</span>
        <span class="name">{{user.username}}</span>
        <span class="address">{{user.address}}</span>
        <span class="btn">
          <button type="button" (click)="sendForEdition(user)">Edit</button>
        </span>
      </div>
    </li>
  </ul>{{changeDetectionRunning()}}
  `,
  styles: [
    `
    div{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin: 5px 10px 5px 10px;
      border-bottom: 1px solid grey;
    }
            
    span.id{
      width: 2rem;
      text-align:center;
      border-right: 1px solid black;
    }

    span.name{
      width: 13rem;
      padding: 0 0 0 10px;
      border-right: 1px solid black;
    }

    span.address{
      width: 16rem;
      padding: 0 0 0 10px;
      border-right: 1px solid black;
    }

    span.btn{
      width: 100px;
      text-align: center;
      padding: 3px;
    }

    button{
      font-size: 1rem;
      padding: 0.3rem;
      background-color: transparent;
      border: 1px solid transparent;
      cursor: pointer;
      width:70px;
    }
    button:hover{
      border: 1px solid grey;
    }
    `
  ]
})
export class UserListComponent {

  @Input()
  public userList: User[];

  @Output()
  public userSelected: EventEmitter<User> = new EventEmitter<User>() ;
  
  public changeDetectionRunning(): void {
    console.log('Change detection on UserList');
  }

  public sendForEdition(user: User): void{
    this.userSelected.emit(user);    
  }

}
