export const debounce = <F extends (...args: Parameters<F>) => ReturnType<F>>(
  fn: F,
  delay: number,
) => {
  let timeout: ReturnType<typeof setTimeout>
  return function(...args: Parameters<F>) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      //@ts-ignore
      fn.apply(this, args)
    }, delay)
  }
}
