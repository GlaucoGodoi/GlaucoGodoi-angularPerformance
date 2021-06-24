import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from './data/user';
import * as faker from 'faker/locale/pt_PT';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users = new Array<User>();
  
  title = 'pipeDemo';

  constructor(){
    this.loadUsers();
  }


  public addUser(): void{
      
    this.users.unshift({id:this.users.length, name: `${faker.name.firstName()} ${faker.name.lastName()}`} as User);

  }

  public updateSingleUser(): void{
    this.users[0].name = (this.users[0].name + '123').substring(0,18);
  }

  public trackByMethod(index: number, item: User): number{
    return item.id;
  }

  private simpleFib(value: number): number{

    if(value<3) return 1;
    return this.simpleFib(value -1) + this.simpleFib(value -2);
  }

  private loadUsers(): void{
    for (let index = 1; index <= 20; index++) {
      
      this.users.push({id:index, name: `${faker.name.firstName()} ${faker.name.lastName()}` } as User)
      
    }    
  }
}
