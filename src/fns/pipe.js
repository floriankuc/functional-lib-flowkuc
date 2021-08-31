export const pipe = (...fns) => fns.reduce((result, f) => (...args) => f(result(...args)));
