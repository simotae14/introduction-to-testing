import { describe, expect, it, vi } from 'vitest';

// define a function to test
async function getConcertDetails(band) {
  const response = await fetch(`/api/concerts$band=${band}`);
  const data = await response.json();
  return data;
}

describe('getConcertDetails', () => {
  it('returns concert details from the API', async () => {
    // Stub the fetch function to simulate an API response
    const fetchStub = vi.fn(() =>
      Promise.resolve({
        json: () => ({ band: 'Green Day', venue: 'Madison Square Garden' }),
      }),
    );

    // replace the global fetch function with the stub
    global.fetch = fetchStub;

    // call the function to test
    const result = await getConcertDetails('Green Day');

    // Assert that the stubbed API returned the correct data
    expect(result).toEqual({
      band: 'Green Day',
      venue: 'Madison Square Garden',
    });

    // Clean up: Restore the original fetch function
    fetchStub.mockRestore();
  });
});
