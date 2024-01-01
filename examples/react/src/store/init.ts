import { $count } from './states';

import { increment, decrement } from './actions';

$count
  .on(increment, (prev, payload) => prev + payload)
  .on(decrement, (prev, payload) => prev - payload);

console.log(increment.model);
console.log(decrement.model);

$count.watch(() => console.log($count))

increment.model.watch((num) => {
  console.log(`increment: ${num}`, increment.model);
});

console.log($count);

increment(10);
decrement(4);

