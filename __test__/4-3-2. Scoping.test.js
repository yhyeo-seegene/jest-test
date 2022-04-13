// Note that the top-level beforeEach is executed before the beforeEach inside the describe block. It may help to illustrate the order of execution of all hooks.
beforeAll(() => console.log('1 - beforeAll'));        // 1
afterAll(() => console.log('1 - afterAll'));          // 12
beforeEach(() => console.log('1 - beforeEach'));      // 2 6
afterEach(() => console.log('1 - afterEach'));        // 4 10
test('test', () => console.log('1 - test'));          // 3
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));      // 5
  afterAll(() => console.log('2 - afterAll'));        // 11
  beforeEach(() => console.log('2 - beforeEach'));    // 7
  afterEach(() => console.log('2 - afterEach'));      // 9
  test('Scoped test', () => console.log('2 - test')); // 8
});