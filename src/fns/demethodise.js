export const demethodise = (fn) => (...args) => fn.bind(...args)();
