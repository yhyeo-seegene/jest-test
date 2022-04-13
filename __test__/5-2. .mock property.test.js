describe('mock property', () => {
  const myMock = jest.fn(function (_name) {
    this.name = _name;
  });
  
  test('track the value of this for each call', () => {
  
    const a = new myMock('a function');
    const b = {};
    const bound = myMock.bind(b);
    bound('b function');
  
    expect(myMock.mock.instances[0]).toEqual(a);
    expect(myMock.mock.instances[1]).toEqual(b);
  });
})