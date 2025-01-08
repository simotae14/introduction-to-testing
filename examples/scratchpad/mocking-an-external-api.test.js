import { describe, it, vi, expect } from 'vitest';
// Assume you have an API module
import * as api from './api';

// Code under test
async function fetchConcertData(bandName) {
  const response = await api.getConcerts(bandName);
  return response.data;
}

describe('fetchConcertData', () => {
  // Mock the API module
  vi.mock('./api', () => ({
    getConcerts: vi.fn(() =>
      Promise.resolve({ data: [{ venue: 'Wembley', date: '2024-10-05' }] }),
    ),
  }));

  it('should fetch concert data using the mocked API', async () => {
    // Call the function under test
    const result = await fetchConcertData('Green Day');

    // Assert that the API was called with the correct argument
    expect(api.getConcerts).toHaveBeenCalledWith('Green Day');

    // Check the returned data
    expect(result).toEqual([{ venue: 'Wembley', date: '2024-10-05' }]);
  });
});
