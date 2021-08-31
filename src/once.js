export const once = (f, g = () => {}) => {
  return (...args) => {
    f !== null ? f(...args) : g(...args);
    f = null;
  };
};
