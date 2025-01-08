import { describe, it, vi, expect } from 'vitest';

// Mock the timers
vi.useFakeTimers();

// Example function that uses setTimeout
function delay(callback) {
  setTimeout(() => {
    callback('Delayed');
  }, 1000);
}
describe('delay function', () => {
  it('should call callback after delay', () => {
    const callback = vi.fn();

    // Call the function under test
    delay(callback);

    // Fast-forward time
    vi.advanceTimersByTime(1000);

    // Assert that the callback was called
    expect(callback).toHaveBeenCalledWith('Delayed');
  });
});
