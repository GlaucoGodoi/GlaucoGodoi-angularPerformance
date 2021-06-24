import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import { User } from '../../data/user';

@Component({
  selector: 'app-user-detail',
  template: `
  <div class="control-holder">
    <div class="form-holder">
      <p>
        <label for="userId">Id</label>
        <input type="text" id="userId" readonly  [(ngModel)]="user.id">
      </p>
      <p>
        <label for="username">Name</label>
        <input type="text" id="username" [(ngModel)]="user.username">
      </p>
      <p>
        <label for="username">Address</label>
        <input type="text" id="address" [(ngModel)]="user.address">
      </p>
    </div>
    <button type="button" (click)="saveChanges()">Save</button>
  </div>
  {{changeDetectionRunning()}}
  `,
  styles: [
    `
    .control-holder{
      border: 2px solid black;
      box-shadow: 0 5px 5px grey;
      margin: 10px;
      padding: 10px;
      background-color: orange;
      display:flex;
      justify-content: space-between;
      align-items: center;
    }

    .form-holder{
      border: 1 px solid lightgrey;
    }

    p{
      margin: 10px 0 0 0;
      width: 100%;
      display: flex;
    }

  label{
      display:inline-block;
      width: 150px;
    }

  input{
    width:300px;
  }

  #userId{
    background-color: orange;
  }

  button{
    border: none;
    border-radius:5px;
    font-size:1rem;
    padding:0.5rem;
    height: 50px;
    box-shadow: 0 5px 5px black;
  }

  button:active{
    box-shadow: none;
  }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent {

  @Input()
  public user: User;

  @Output()
  public userChanged: EventEmitter<User> = new EventEmitter<User>();

  public saveChanges(): void{
    this.userChanged.emit(this.user);
  }

  public changeDetectionRunning(): void {
    console.log('Change detection on UserDetail');
  }

}
