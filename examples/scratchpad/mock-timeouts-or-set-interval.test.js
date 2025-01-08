import { describe, it, vi, expect } from 'vitest';

function delayedFunction(callback) {
  setTimeout(() => {
    callback('Done');
  }, 3000);
}

describe('delayedFunction', () => {
  it('should call callback after timeout', () => {
    // Mock the timer
    vi.useFakeTimers();

    const callback = vi.fn();
    // Call the function under test
    delayedFunction(callback);

    // Fast-forward the timer
    vi.advanceTimersByTime(3000);

    // Assert that the callback was called
    expect(callback).toHaveBeenCalledWith('Done');
  });
});
