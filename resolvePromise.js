function resolvePromise(prms, promiseState) {
  function dataACB(param) {
    if (promiseState.promise === prms) {
      promiseState.data = param;
    }
  }

  function errorACB(param) {
    if (promiseState.promise === prms) {
      promiseState.error = param;
    }
  }

  promiseState.promise = prms;
  promiseState.data = null;
  promiseState.error = null;

  if (prms !== null) {
    prms.then(dataACB).catch(errorACB);
  }
}

export default resolvePromise;
