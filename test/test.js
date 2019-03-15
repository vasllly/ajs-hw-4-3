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

test('fetchData return status ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 2 });
  const received = getLevel(1);
  const expected = 'Ваш текущий уровень: 2';
  expect(received).toBe(expected);
});

test('fetchData return status error', () => {
  fetchData.mockReturnValue({ status: 'error', level: 2 });
  const received = getLevel(1);
  const expected = 'Информация об уровне временно недоступна';
  expect(received).toBe(expected);
});
