import getLevel from '../src/js/script';
import fetchData from '../src/js/http';

jest.mock('../src/js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call fetchData once', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});
