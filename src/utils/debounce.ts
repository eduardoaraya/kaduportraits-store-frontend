export function debounce_leading(func: (...args: any[]) => any, timeout = 300) {
  let timer: NodeJS.Timeout | undefined;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
      func.apply(func, args);
    }, timeout);
  };
}
