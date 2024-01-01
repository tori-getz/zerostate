import { state } from '@zerostate/core';
import { app } from './domain';

export const $count = app.createState<number>(0, { name: 'count' });

export const $google = state<string>('', { name: 'google' });
