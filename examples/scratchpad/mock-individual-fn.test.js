import { describe, it, vi, expect } from 'vitest';

// Database service that will be mocked
function fetchBandData(bandName) {
  // Normally this would fetch from a database
  return database.query(`SELECT * FROM bands WHERE name = '${bandName}'`);
}

// Code under test
async function getBandDetails(bandName) {
  return await fetchBandData(bandName);
}

describe('getBandDetails', () => {
  it('should return mocked band data', async () => {
    // Mock fetchBandData to simulate database response
    const mockFetchBandData = vi.fn(() =>
      Promise.resolve({ name: 'Green Day', genre: 'Punk Rock' }),
    );

    // Call the function with the mocked dependency
    const result = await mockFetchBandData('Green Day');

    // Check that the function was called with the correct argument
    expect(mockFetchBandData).toHaveBeenCalledWith('Green Day');

    // Assert the return value
    expect(result).toEqual({ name: 'Green Day', genre: 'Punk Rock' });
  });
});
