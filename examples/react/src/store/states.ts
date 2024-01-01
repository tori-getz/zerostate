import { app } from './domain';

export const $count = app.createState<number>(0, { name: 'count' });
