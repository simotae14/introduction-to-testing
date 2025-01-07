import { vi, expect, describe, it } from 'vitest';

async function fetchBandData(bandName, callback) {
  // Simulate an async operation
  await new Promise((resolve) => setTimeout(resolve, 100));
  callback(`${bandName} data`);
}

describe('fetchBandData', () => {
  it('should call the callback with the correct data', async () => {
    // Create a mock callbacl
    const callback = vi.fn();

    // Call the async function with the mock callback
    await fetchBandData('Green Day', callback);

    // Verify that the callback was called with the correct arguments
    expect(callback).toHaveBeenCalledWith('Green Day data');
  });
});
