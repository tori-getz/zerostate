import { decrement, increment } from './actions';
import { $count } from './states';

$count
  .on(increment, (prev, count) => prev + count)
  .on(decrement, (prev, count) => prev - count);
