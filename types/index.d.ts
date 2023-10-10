declare interface Fn<T, R = T> {
  (...arg: T[]): R;
}

declare interface PromiseFn<T, R = T> {
  (...arg: T[]): Promise<R>;
}
