describe('test mock return values', () => {
  const myMock = jest.fn();
//   console.log(myMock());
  expect(myMock()).toEqual(undefined);

  myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
//   console.log(myMock(), myMock(), myMock(), myMock());

  test('test first call', () => {
    expect(myMock()).toBe(10);
  });

  test('test second call', () => {
    expect(myMock()).toBe('x');
  });

  test('test third call', () => {
    expect(myMock()).toBeTruthy();
  });

  test('test fourth call', () => {
    expect(myMock()).toBeTruthy();
  });

});

describe('continuation-passing style', () => {
  const filterTestFn = jest.fn();
  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
  const result = [11, 12].filter(num => filterTestFn(num));
  console.log(result);
  test('test result', () => {
    expect(result).toEqual([11]);
  });
  console.log(filterTestFn.mock.calls[0][0]); // 11
  console.log(filterTestFn.mock.calls[1][0]); // 12
  test('test call arguments', () => {
    expect(filterTestFn.mock.calls).toEqual([[11], [12]]);
  });
});