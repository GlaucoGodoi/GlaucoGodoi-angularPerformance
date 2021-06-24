import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit, OnChanges {

  @Input()
  public user: User;
  
  @Input() 
  public rank: number

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes user row');
    
  }

  ngOnInit(): void {
    console.log('user row being created');
    
  }

}
