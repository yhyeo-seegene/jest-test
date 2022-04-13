describe('Custom Matchers', () => {
    const mockFunc = jest.fn();
    const arg1 = 1;
    const arg2 = 2;
  
    test('The mock function was called at least once', () => {
      mockFunc();
      expect(mockFunc).toHaveBeenCalled();
      expect(mockFunc.mock.calls.length).toBeGreaterThan(0);
    });
  
    test('The mock function was called at least once with the specified args', () => {
      mockFunc(arg1, arg2);
      expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);
      // expect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);
    });
  
    test('The last call to the mock function was called with the specified args', () => {
      mockFunc(3, 4);
      mockFunc(arg1, arg2);
      expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);
      // expect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([
      //   arg1,
      //   arg2,
      // ]);
    });
  
    test('All calls and the name of the mock is written as a snapshot', () => {
      mockFunc(arg1, arg2);
      expect(mockFunc).toMatchSnapshot();
      // expect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);
      // expect(mockFunc.getMockName()).toBe('a mock name');
    });
  });