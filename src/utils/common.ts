export const promiseWrapper = <T>(promise: Promise<T>) => {
  return promise.then((result) => [null, result]).catch((error) => [error]);
};
