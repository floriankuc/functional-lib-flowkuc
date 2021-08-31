import { pipe } from './pipe.js';

export const compose = (...fns) => pipe(...fns.reverse());
