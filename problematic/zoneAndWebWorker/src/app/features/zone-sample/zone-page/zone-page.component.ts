import { AfterViewInit, Component, OnDestroy} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-zone-page',
  template: `
    <div class="holder">
      <div>
        <app-weight-display [weight]="weight|async"></app-weight-display>
      </div>
      <section>
        <label>Current counter: {{counter}}</label>        
        <button type="button" (click)="increaseCounter()">Increase counter</button>
      </section>
    </div>
  `,
  styleUrls: ['./zone-page.component.scss']
})
export class ZonePageComponent implements AfterViewInit, OnDestroy {

  public weight: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  public counter:number = 0;

  private interval: any;


  public ngAfterViewInit(): void {
  
    this.interval = setInterval(() => {
      let temp = Math.random() * 237;
      if(Math.ceil(temp)%2){
        temp=0;
      }      
      this.updateWeight(temp);            
    }, 500);    
  
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  public increaseCounter(): void{
    this.counter++;
  }

  private updateWeight(weight: number): void{   
    this.weight.next(weight);
  }
}
