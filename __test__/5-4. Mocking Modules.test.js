import axios from 'axios';
import Users from '../users';

jest.mock('axios');

describe('Mocking Modules', () => {
  test('should fetch users', async () => {
    const users = [{name: 'Bob'}];
    const resp = {data: users};
    axios.get.mockResolvedValue(resp);
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
    
    return Users.all().then(data => expect(data).toEqual(users));
  });
});