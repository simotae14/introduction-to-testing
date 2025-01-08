import { describe, it, vi, expect } from 'vitest';
// Imagine you have a module called 'api' with various functions
import * as api from './api';

// Code under test
async function getConcertDetails(bandName) {
  return await api.fetchConcerts(bandName);
}

describe('getConcertDetails', () => {
  // Mock the entire api module
  vi.mock('./api', () => ({
    fetchConcerts: vi.fn(() =>
      Promise.resolve([{ venue: 'Madison Square Garden', date: '2024-09-01' }]),
    ),
  }));

  it('should return mocked concert details', async () => {
    // Call the function with the mocked module
    const result = await getConcertDetails('Green Day');

    // Check that the fetchConcerts mock was called
    expect(api.fetchConcerts).toHaveBeenCalledWith('Green Day');

    // Assert the return value
    expect(result).toEqual([
      { venue: 'Madison Square Garden', date: '2024-09-01' },
    ]);
  });
});
