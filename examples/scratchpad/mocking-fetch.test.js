import { afterEach, test, vi, expect } from 'vitest';
import { getData } from './getData';

afterEach(() => {
  vi.clearAllMocks(); // Reset all mocked calls between tests
});

test('fetches data successfully from API', async () => {
  // Mock the fetch function.
  const mockResponse = {
    userId: 1,
    id: 1,
    title: 'Test Todo',
    completed: false,
  };

  // Here we tell Vitest to mock fetch on the `window` object.
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    }),
  );

  // Call the function and assert the result
  const data = await getData();
  expect(data).toEqual(mockResponse);

  // Check that fetch was called exactly once
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    'https://jsonplaceholder.typicode.com/todos/1',
  );
});

test('handles fetch failure', async () => {
  global.fetch = vi.fn(() => Promise.reject('API is down'));

  await expect(getData()).rejects.toEqual('API is down');
  expect(fetch).toHaveBeenCalledTimes(1);
});
