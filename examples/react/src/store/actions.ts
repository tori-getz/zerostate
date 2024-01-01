import { app } from './domain';

export const increment = app.createAction<number>('increment');

export const decrement = app.createAction<number>('decrement');

