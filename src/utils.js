export function debounce(method, delay) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      method.apply(this, args);
    }, delay);
  };
}
