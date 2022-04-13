jest.mock('../foo'); // 해당 모듈을 자동으로 mock 모듈로 취급 됨
import foo from '../foo';

describe('Mock Implementations', () => {
  test('test jest fn', () => {
    const myMockFn = jest.fn(cb => cb(null, true));
    expect(myMockFn((err, val) => val)).toBeTruthy();
  });

  test('test mock implementation', () => {
    foo.mockImplementation(() => {
      console.log('Mock implementation');
      return 77;
    });

    expect(foo()).not.toBe(42); // Actual implementation이 아닌,
    expect(foo()).toBe(77);     // Mock implementation이 실행 됨
  });
});

describe('Mock Implementation Once', () => {
    test('test mockImplementationOnce without default', () => {
      const myMockFn = jest
        .fn()
        .mockImplementationOnce(cb => cb(null, true))
        .mockImplementationOnce(cb => cb(null, false));
  
      const cbFn = (err, val) => val;
  
      expect(myMockFn(cbFn)).toBeTruthy();
      expect(myMockFn(cbFn)).toBeFalsy();
      expect(myMockFn(cbFn)).toBeUndefined();
    });
  
    test('test mockImplementationOnce with default', () => {
      const myMockFn = jest
        .fn(cb => cb(null, 'default'))
        .mockImplementationOnce(cb => cb(null, true))
        .mockImplementationOnce(cb => cb(null, false));
  
      const cbFn = (err, val) => val;
  
      expect(myMockFn(cbFn)).toBeTruthy();
      expect(myMockFn(cbFn)).toBeFalsy();
      expect(myMockFn(cbFn)).toBe('default');
    });
  });

  describe('Mock Return This', () => {
    test('test mockReturnThis', () => {
      const myObj = {
        myMethod: jest.fn().mockReturnThis(),
        // 아래 구현과 동일하게 동작
        // myMethod: jest.fn(function () {
        //         return this;
        //       }),
        log: jest.fn(() => 'logging')
      };
  
      expect(myObj.myMethod()).toEqual(myObj);
      expect(myObj.myMethod().log()).toBe('logging');
    });
  });