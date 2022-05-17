type GetFunctionInfo<F extends Function> = F extends ((...args: infer A) => infer R) ? [A, R] : never;

export const memoize = <T extends Function>(fn: T) => {
  const cache = {};
  return (...args: GetFunctionInfo<T>['0']): GetFunctionInfo<T>['1'] => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = Promise.resolve(fn(...args));

    return new Promise(resolve => {
      result.then(value => {
        cache[key] = value;
        resolve(value);
      });
    })
  }
}

function sayHello(name: string) {
  // await new Promise(resolve => setTimeout(resolve, 1000));

  return `Hello ${name}`;
}

const sayHelloMemoized = memoize(sayHello);

console.log(sayHelloMemoized('John'));