import { AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/data/user';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent {
  
  @Input()
  public user: User;
  
  @Input() 
  public rank: number
}
