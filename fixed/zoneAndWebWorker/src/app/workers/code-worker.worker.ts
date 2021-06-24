/// <reference lib="webworker" />

import { memoize } from "lodash";
import { Product } from "../features/ww-sample/data/product";

addEventListener('message', ({ data }) => {
  const temp = data as Product;  
  
  let target = temp.name.length * 2;
  target = target > 40 ? 40 : target;

  const memoCalc = memoize(calculateFibo);

  temp.code = memoCalc(target);

  console.log(temp);

  postMessage(temp);
});

function calculateFibo(value: number): number{

  if(value<3){
    return 1;
  }

  return (calculateFibo(value - 2) + calculateFibo(value - 1 ));

}