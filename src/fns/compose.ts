import { pipe } from './pipe.js';

export type TCompose = (...args: Function[]) => Function;

export const compose: TCompose = (...fns: Function[]): Function => pipe(...fns.reverse());
