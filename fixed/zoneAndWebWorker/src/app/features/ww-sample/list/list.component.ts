import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../data/product';

@Component({
  selector: 'app-list',
  template: `
  <ul>

  <li>
      <div class="row-holder header">
        <span class="id">Id</span>
        <span class="name">Product name</span>
        <span class="code">Code</span>
      </div>
    </li>

    <li *ngFor="let item of items; trackBy: trackByMethod">
      <div class="row-holder">
        <span class="id">{{item.id}}</span>
        <span class="name">{{item.name}}</span>
        <span class="code">{{item.code}}</span>
      </div>
    </li>
  </ul>
  {{runningChangeDetection()}}
  `,
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent{

  @Input()
  public items: Product[]

  public trackByMethod(index: number, item: Product): number{
    return item.id;
  }

  public runningChangeDetection(): void{
    console.log('Change detection on list');
    
  }

}
