import { describe, expect, it, vi } from 'vitest';

function processOrder(orderId) {
  console.log(`Processing order: ${orderId}`);
}

describe('processOrder', () => {
  it('should log the correct order ID', () => {
    // Spy on console log
    const logSpy = vi.spyOn(console, 'log');

    // Call the function under test
    processOrder('12345');

    // Verify the spy was called exactly once
    expect(logSpy).toHaveBeenCalledTimes(1);

    // Verify the spy was called with the correct argument
    expect(logSpy).toHaveBeenCalledWith('Processing order: 12345');

    // Clean up: Restore the original console.log function
    logSpy.mockRestore();
  });
});
