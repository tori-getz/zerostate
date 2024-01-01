import { action } from '@zerostate/core';

export const increment = action<number>('increment');

export const decrement = action<number>('decrement');

