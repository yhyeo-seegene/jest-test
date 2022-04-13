
//https://ko.javascript.info/async

const fetchData = (callbackFunction) => {
  setTimeout(() => {
    console.log("wait 0.1 sec.");
    callbackFunction('peanut butter');
  }, 100);
};

// Callbacks
test('the data is peanut butter', () => {
  // Don't do this!
  // The problem is that the test will complete as soon as fetchData completes, before ever calling the callback.
  function callback(data) {
    expect(data).toBe('peanut butter');
  }
  fetchData(callback);
});

test('the data is peanut butter', done => {
  // If done() is never called, the test will fail (with timeout error), which is what you want to happen.
  // done() should not be mixed with Promises as this tends to lead to memory leaks in your tests.
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

const fetchData2 = () => {
  return new Promise(resolve => {
    return setTimeout(() => {
      console.log("wait 0.1 sec.");
      resolve('peanut butter');
    }, 100);
  });
};

const fetchData3 = () => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      console.log("wait 0.1 sec.");
      reject('error reason');
    }, 100);
  });
};

// Promises
test('the data is peanut butter', () => {
  return fetchData2().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData3().catch(e => expect(e).toMatch('error'));
});

// .resolves / .rejects
test('the data is peanut butter', () => {
  return expect(fetchData2()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchData3()).rejects.toMatch('error');
});

// Async/Await
test('the data is peanut butter', async () => {
  const data = await fetchData2();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData3();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

// .resolves / .rejects with Async/Await
test('the data is peanut butter', async () => {
  await expect(fetchData2()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchData3()).rejects.toMatch('error');
});