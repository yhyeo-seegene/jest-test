const myMockFn = jest
  .fn()
  .mockReturnValue('default')
  .mockImplementation(scalar => 42 + scalar)
  .mockName('add42');


describe('Mock Names', () => {
  test('test display mock function name', () => {
    const myMockFn = jest
      .fn()
      .mockName('namedMockFn')
    myMockFn(1);
    expect(myMockFn).toHaveBeenCalled(); // 호출이 되는지 테스트
  });
});
  
// 이름 지정 안한 경우
// Error: expect(jest.fn()).toHaveBeenCalled()
 
// 이름 지정 한 경우
// Error: expect(namedMockFn).toHaveBeenCalled()