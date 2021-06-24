import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rankCalculator'
})
export class RankCalculatorPipe implements PipeTransform {

  transform(name: string, ...args: unknown[]): number {
    console.log('Pipe invoked for: ', name);
    
    const target = name.length *2;
    
    return this.simpleFib(target);
  }

  private simpleFib(value: number): number{

    if(value<3) return 1;
    return this.simpleFib(value -1) + this.simpleFib(value -2);
  }

}
