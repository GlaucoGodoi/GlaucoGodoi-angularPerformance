import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codeGenerator'
})
export class CodeGeneratorPipe implements PipeTransform {

  transform(productName: string, ...args: unknown[]): number {
    let target = productName.length * 2;
    target = target > 40 ? 40 : target;
    console.log('Calculate code', target);
    console.time('calculating')
    const ret = this.calculateFibo(target);
    console.timeEnd('calculating')
    return ret;
  }

  private calculateFibo(value: number): number {

    if (value < 3) {
      return 1;
    }

    return this.calculateFibo(value - 2) + this.calculateFibo(value - 1);

  }

}
