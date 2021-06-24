import { Injectable } from '@angular/core';
import { User } from '../data/user';
import * as faker from 'faker/locale/cz';

@Injectable({
  providedIn: 'root'
})
export class ThreeService {

  private users = new Array<User>();

  constructor() { 
    for (let index = 1; index <= 10; index++) {
      this.users.push({
        id: index, 
        username: `${faker.name.firstName()} ${faker.name.lastName()}`,
        address: faker.address.streetAddress()
      } as User);
      
    }    
  }

  public getCurrentUsers(): User[]{
    return this.users;
  }

  public updateUser(userToUpdate: User): void{
    this.users[userToUpdate.id - 1] = userToUpdate;
  }

}
